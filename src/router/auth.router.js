const Router = require('koa-router')
const authRouter = new Router()

const {
    login,
    success
} = require('../controller/auth.controller')

const {
    verifyPassword,
    verifyAuth
} = require('../middleware/login.middleware')

authRouter.post('/login', verifyPassword, login)
authRouter.get('/test', verifyAuth, success)


module.exports = authRouter