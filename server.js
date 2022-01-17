const express = require('express');
const app = express();
const port = 3000;
const chalk = require('chalk');
const debug = require('debug')('server');
const morgan = require('morgan');

app.use(morgan('combined'));

app.get("/",(req,res) =>{

    res.send('Hi !!!!');
})


app.listen(port,()=>{
    debug("server is running" + chalk.blue(":"+port));
})