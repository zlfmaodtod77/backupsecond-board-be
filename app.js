const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const movies = require('./src/models/movies');
const users = require('./src/models/users');
const port = 9091;

// function getMoviesByPage(page) {

// }

const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(cors());
// app.use(express.urlencoded({ extended: false }));

// 영화 리스트
app.get('/movies', (req, res) => {
    const  page  = req.query.page || 1
    // console.log("page :", page);

    //기본값 유지
    const cloneMovies = [...movies];
    const LastPage = Math.ceil(movies.length / 10);
    const startIndex = (page -1) * 10;
    const paginationMovies = cloneMovies.splice(startIndex, 10);

    const moviesList = paginationMovies.map ((movie) => ({
        ...movie,
        name: users.find (user => user.id === movie.user_id).name
    }));
   
    moviesList.sort((a, b) => {
        const preTimestamp = new Date(a.created_at).getTime();
        const curTimestamp = new Date(b.created_at).getTime();
        return curTimestamp - preTimestamp;           //등록일 내림차순
    }); 

    
    res.send({
        pageinfo: {
            LastPage,
        },
        movies: paginationMovies,
        movies: moviesList,
    });
}),

//상세
app.get('/movies/:id', (req, res)=> {
    //1. 사용자가 보내준 id 를 가져온다
    const {id} = req.params;
    //2. id 에 해당하는 movie 를 가져온다
    const selectedmovie = movies.find(movie => movie.id === Number(id));
    // const findMovie = movies.find((movie) => movie.id === Number(id));
//     //3. 가져온 movie 에서 hit_count 1을 더한 객체를 만든다
    const movietoreplace = {
        ...selectedmovie,
        hit_count: selectedmovie.hit_count +1
    };
    // const increaseReview = {...findMovie, hit_count: findMovie.hit_count + 1};
    //4. hit_count 1을 더한 객체를 movies 내에서 기존 객체에 치환한다(바꾼다 findindex, splice 사용)
    const targetindex = movies.findIndex(movie => movie.id === Number(id));
    // const movie = movies.findIndex((movie) => movie.id === Number(id));
    movies.splice(targetindex, 1, movietoreplace);
    // movies.splice(movie, 1, increaseReview );
//     //5. hit_count 1을 더한 객체를 반환
    // console.log(targetindex)
    return res.send(selectedmovie);
});

//등록
app.post('/movies', (req, res) => {
    //1. 사용자가 등록할 영화의 정보를 주면 받아온다 from 요청 (req)
    // const newmovie = req.body;    
    const { movie_title, user_id } = req.body;         
    //2. 가져온 영화정보에 id를 부여한다
    // newmovie.id = movies[movies.length - 1].id +1;   
    //3. 조회수 (hit_count)는 기본으로 0으로 설정한다
    // newmovie.hit_count = 0;
    const hitcount = 0;       
    //4. 작성일은 현재 시간을 넣는다                         
    // newmovie.created_at = new Date(). toISOString();
    const date = new Date().toISOString().substring(0, 10);
    const time = new Date().toISOString().substring(11, 19);         
     // 2, 3, 4 부여된 영화정보를 movies에 추가한다

     movies.unshift({
        id: movies.length + 2,
        movie_title,
        hit_count: hitcount,
        user_id,
        created_at: `${date} ${time}`,
     });                                  
    return res.send(movies);
});
    

app.listen(port, () => {
    console.log(port, "서버열림");
});

