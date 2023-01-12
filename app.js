const express = require('express');

const app = express();
const port = 9091;

app.get('/home', (req, res) => {
    res.send("홈")
});


app.post('/login', (req, res) => {
    res.send("로그인 페이지")
});

app.listen(port, () => {
    console.log(port, "서버열림");
});

