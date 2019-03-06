const express = require('express');
const api = require('./api');
const app = express();
const port = 3000;

app.all('/', (req, res)=>{
    console.log('http://' + req.hostname + req.path);
})