const scores = [
    {name: '지영', score: 80, mbti: 'INFP', addr: "지구 어딘가 ", contact: "010-1234-1234"},
    {name: '효원', score: 50, mbti: 'INFP', addr: "지구 어딘가 ", contact: "010-1234-1234"},
    {name: '정기', score: 60, mbti: 'INFP', addr: "지구 어딘가 ", contact: "010-1234-1234"},
    {name: '대신', score: 30, mbti: 'INFP', addr: "지구 어딘가 ", contact: "010-1234-1234"},
    {name: '택환', score: 94, mbti: 'INFP', addr: "지구 어딘가 ", contact: "010-1234-1234"},
    {name: '호승', score: 30, mbti: 'INFP', addr: "지구 어딘가 ", contact: "010-1234-1234"},
    {name: '희선', score: 23, mbti: 'INFP', addr: "지구 어딘가 ", contact: "010-1234-1234"},
    {name: '설인', score: 56, mbti: 'INFP', addr: "지구 어딘가 ", contact: "010-1234-1234"},
]

// 과제2
// 배열에서 40점 미만 점수 받은 자 구하기 for 문 의 경우에는 전부 이름으로 된 배열을 반환하는 한편,
//  filter 를 사용하면 배열내 객체들로 이루어진 배열을 반환한다. for 문을 사용 했을때 처럼 이름으로만 이루어진 배열로 반환하도록 수정한다.

const 빠따 = []
for(let i = 0; i < scores.length; i++) {            //i 는 0이고 i 의 scores 를 한번씩 돈다 
    if(scores[i].score < 40) {                      //이때 scores 의 score 가 40 보다 낮은 
        빠따.push(scores[i].name)                   // 이름을 빠따에 넣는다 
    }
};

console.log(빠따);          

const 빠따 = []
for(let i =0; i < score.length; i++) {
    if(scores[i].score < 40) {
        빠따.push(score[i].name)
    }
};
console.log(빠따);

const 빠따 = []
for(let i = 0; i < Score.length; i++) {
    if(scores[i].score < 40) {
        빠따.push(score[i].name)
    }
};
console.log(빠따);

const 빠따 = []
for(let i = 0; i < score.length; i++) {
    if(score[i].score < 40) {
        빠따.push(score[i].name)
    }
};
console.log(빠띠);

const 빠따 = []
for(let i = 0; i < score.length; i++) {
    if(score[i].score < 40) {
        빠따.push(score[i].name)
    }
};
console.log(빠따);

const 빠따 = []
for(let i = 0; i < score.length; i++) {
    if(score[i].score < 40) {
        빠따.push(score[i].name)
    }
};
console.log(빠따);

const 빠따 = [] 
for(let i = 0; i < score.length; i ++) {
    if(score[i].score < 40) {
        빠따.push(score[i].name)
    }
};
console.log(빠따);

const 빠따 = []
for(let i = 0; i < score.length; i++) {
    if(score[i].score < 40) {
        빠따.push(score[i].name)
    }
};
console.log(빠따);

const 빠따 = []
for(let i = 0; i < score.length; i++) {
    if(score[i].score < 40) {
        빠따.push(score[i].name)
    }
};
console.log(빠따);

const 빠따 = []
for(let i = 0; i < score.length; i ++) {
    if(score[i].score < 40) {
        빠따.push(score[i].name)
    }
};
console.log(빠따);

// 과제3
// 가장 공부를 잘했던 “지영” 의 점수 확인 for 문의 경우 지영 의 score 반 변수에 할당 되는 한편 find 를 사용하면 지영의 객체를 반환한다. 
// 이때 지영의 score 만 할당되도록 수정한다.

let 지영score = null                            //지영score 에 null 없는 값을 넣어 놓는다
for (let i = 0; i < scores.length; i++) {       // for 문으로 배열을 한번씩 돌아준다      
    if (scores[i].name === '지영') {            // 이때 scores 의 name 이 지영과 같은 것을 가져오게 한다
        지영score = scores[i].score             // 지영score 는 scores 의 score 점수를 담는다
    }
};
console.log("지영:" , 지영score); 

let 지영score = null
for(let i = 0; i <score.length; i++) {
    if(score[i].name === '지영'){
        지영score = score[i].score
    }
};
console.log('지영', 지영score);


// app.get('/list', (req, res) => {
//     const { keyword } = req.query;
//     console.log(keyword);
//     res.send("게시글 리스트")
// });

// app.get('/users/:id',(req, res) => {
//     const { id } = req.params;
//     console.log(id);
//     res.send("회원정보 한 명")
// });

// app.get('/posts/:postid',(req, res) => {
//     const { postid } = req.params;
//     console.log(postid);
//     res.send("게시글 상세")
// });

// app.post('/login', (req, res) =>{
//    const {email,password} = req.body;
//    console.log("email", email);
//    console.log("password", password);
//    res.send("로그인")
// });

// app.post('/signup', (req, res) => {
//     const { id, password , nikname } = req.body;
//     console.log("id", id);
//     console.log("password", password);
//     console.log("nikname", nikname);
//     res.send("회원가입")
// });

// app.post('/posts/write',(req, res) => {
//     const { title, content } = req.body;
//     console,log("title", title);
//     console.log("content", content);
//     res.send("게시글 작성")
// });

// app.post('/posts/:postid/edit',(req, res) => {
//     const { postid } = req.params;
//     const { title, content } = req.body;
//     console.log(postid);
//     console.log("title", title);
//     console.log("content", content);
//     res.send("게시글 수정")
// });

// app.post('/posts/:postid/delete',(req, res) => {
//     const { postid} = req.params;
//     console.log(postid) ;
//     res.send("게시글 삭제")
// });