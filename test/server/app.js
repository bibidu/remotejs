const path = require('path')
const express = require('express')

const config = require('./config')
const app = express()

app.all('*',function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*'); //当允许携带cookies此处的白名单不能写’*’
  res.header('Access-Control-Allow-Headers','content-type,Content-Length, Authorization,Origin,Accept,X-Requested-With'); //允许的请求头
  res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT'); //允许的请求方法
  next();
});

app.use('/static', express.static(path.join(__dirname, 'static')))

app.listen(config.port, () => console.log(`server open on ${config.port}`))