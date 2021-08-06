const Koa = require('koa')
const bodyParser = require('koa-bodyparser')

const userRouter = require('../router/user.router')
const authRouter = require('../router/auth.router')
const errorHandle = require('../app/error-handle')

const app = new Koa()

app.use(bodyParser())                 //注册bodyParser（解析返回的数据）  
app.use(userRouter.routes())          //注册userRouter路由规则
app.use(userRouter.allowedMethods())
app.use(authRouter.routes())          //注册authRouter路由规则
app.use(authRouter.allowedMethods())

app.on('error', errorHandle)

module.exports = app
