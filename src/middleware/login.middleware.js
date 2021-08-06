const errorType = require('../constants/error-types')
const connections = require('../service/user.service')
const md5password = require('../utile/password-handle')

const verifyPassword = async (ctx, next) => {
    const { name, password } = ctx.request.body
    //用户名或密码不能为空
    if (!name || !password) {
        const error = new Error(errorType.NAME_OR_PASSWORD_IS_REQUIRE)
        return ctx.app.emit('error', error, ctx)
    }
    const result = await connections.getUserByName(name)

    //用户不存在
    if (!result[0]) {
        const error = new Error(errorType.USER_DOES_NOT_EXISTS)
        return ctx.app.emit('error', error, ctx)
    }

    //确认密码
    if (result[0].password !== md5password(password)) {
        const error = new Error(errorType.PASSWORD_IS_INCRORECT)
        return ctx.app.emit('error', error, ctx)
    }
    await next()
}

module.exports = {
    verifyPassword
}