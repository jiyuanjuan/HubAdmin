const jwt = require('jsonwebtoken')

const errorType = require('../constants/error-types')
const connections = require('../service/user.service')
const md5password = require('../utile/password-handle')
const { PUBLIC_KEY } = require('../app/config')
const { UNAUTHORIZATION } = require('../constants/error-types')

const verifyPassword = async (ctx, next) => {
    const { name, password } = ctx.request.body
    //用户名或密码不能为空
    if (!name || !password) {
        const error = new Error(errorType.NAME_OR_PASSWORD_IS_REQUIRE)
        return ctx.app.emit('error', error, ctx)
    }
    const result = await connections.getUserByName(name)
    const user = result[0]

    //用户不存在
    if (!user) {
        const error = new Error(errorType.USER_DOES_NOT_EXISTS)
        return ctx.app.emit('error', error, ctx)
    }

    //确认密码
    if (user.password !== md5password(password)) {
        const error = new Error(errorType.PASSWORD_IS_INCRORECT)
        return ctx.app.emit('error', error, ctx)
    }
    ctx.user = user
    await next()
}

const verifyAuth = async (ctx, next) => {
    const token = ctx.headers.authorization.replace('Bearer ', '');
    try {
        const result = await jwt.verify(token, PUBLIC_KEY, {
            algorithms: ['RS256']
        })
        await next()
    } catch (err) {
        const error = new Error(UNAUTHORIZATION)
        ctx.app.emit('error', error, ctx)
    }
}

module.exports = {
    verifyPassword,
    verifyAuth
}