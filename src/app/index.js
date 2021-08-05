const Koa = require('koa')
const app = new Koa()
const userRouter = require('../router/user.router')
const bodyParser = require('koa-bodyparser')

app.use(bodyParser())                 //注册bodyParser（解析返回的数据）  
app.use(userRouter.routes())          //注册userRouter路由规则
app.use(userRouter.allowedMethods())

module.exports = app
