const express = require('express');
const app = express();
app.listen('3000');
app.router ('/').post ((req,res) => console.log(req.body))