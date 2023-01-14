const express = require('express');
// const cookieParser = require('cookieparser');


const app = express();
const port = 9091;

// app.use(cookieParser());

app.get('/query', (req, res) => {
    console.log(req.query.name)
});

app.post('/login', (req, res) => {
    const {email, paaword } = req.body
    console.log ("email", email)
    console.log ("password", password)
    res.send("/login api")
});

app.get('/headers', (req, res) => {
    console.log(req.headers)
});

app.get('/cookies', (req, res) => {
    console.log(req.cookies)
});

app.get('/body', (req, res) => {
    console.log(req.body)
});




app.listen(port, () => {
    console.log(port, "서버열림");
});

