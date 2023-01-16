const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
const port = 9091;

app.use(cookieParser());
app.use(express.json());

app.get('/list', (req, res) => {
    const { keyword } = req.query;
    console.log(keyword);
    res.send("게시글 리스트")
});

app.get('/users/:id',(req, res) => {
    const { id } = req.params;
    console.log(id);
    res.send("회원정보 한 명")
});

app.get('/posts/:postid',(req, res) => {
    const { postid } = req.params;
    console.log(postid);
    res.send("게시글 상세")
});

app.post('/login', (req, res) =>{
   const {email,password} = req.body;
   console.log("email", email);
   console.log("password", password);
   res.send("로그인")
});

app.post('/signup', (req, res) => {
    const { id, password , nikname } = req.body;
    console.log("id", id);
    console.log("password", password);
    console.log("nikname", nikname);
    res.send("회원가입")
});

app.post('/posts/write',(req, res) => {
    const { title, content } = req.body;
    console,log("title", title);
    console.log("content", content);
    res.send("게시글 작성")
});

app.post('/posts/:postid/edit',(req, res) => {
    const { postid } = req.params;
    const { title, content } = req.body;
    console.log(postid);
    console.log("title", title);
    console.log("content", content);
    res.send("게시글 수정")
});

app.post('/posts/:postid/delete',(req, res) => {
    const { postid} = req.params;
    console.log(postid) ;
    res.send("게시글 삭제")
});



app.listen(port, () => {
    console.log(port, "서버열림");
});

