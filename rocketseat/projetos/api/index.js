const express = require('express');
const app = express();
app.listen('3000');
app.route ('/').get((req,res)=>{res.send ("hello world")});
app.route ('/sobre').get((req,res)=>{res.send ("hello Sobre")});    