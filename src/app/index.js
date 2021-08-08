const Koa = require('koa')
//koa-bodyparser库 解析json返回的数据
const bodyParser = require('koa-bodyparser')   

// const userRouter = require('../router/user.router')
// const authRouter = require('../router/auth.router')
const { userRouter } = require('../router')
const errorHandle = require('../app/error-handle')

const app = new Koa()
app.use(bodyParser())
// app.use(userRouter.routes())          //注册userRouter路由规则
// app.use(userRouter.allowedMethods())
// app.use(authRouter.routes())          //注册authRouter路由规则
// app.use(authRouter.allowedMethods())
app.userRouter = userRouter
app.userRouter()
app.on('error', errorHandle)

module.exports = app
