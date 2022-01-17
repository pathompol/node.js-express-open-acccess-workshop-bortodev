const express = require('express');
const app = express();
const port = 3000;
const chalk = require('chalk'); 
const debug = require('debug')('server'); 
const morgan = require('morgan');
const path =require('path');

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname,"/public/")));
app.get("/",(req,res) =>{
    res.send('Hi pathompol Tee !!!!');
})


app.listen(port,()=>{
    debug("server is running" + chalk.blue(":"+port));
})