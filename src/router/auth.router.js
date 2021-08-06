const Router = require('koa-router')
const authRouter = new Router()

const {
    login
} = require('../controller/auth.controller')

const {
    verifyPassword
} = require('../middleware/login.middleware')

authRouter.post('/login', verifyPassword, login)


module.exports = authRouter