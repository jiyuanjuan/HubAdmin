const errorType = require('../constants/error-types')
const service = require('../service/user.service')
const md5password = require('../utile/password-handle')

const verifyUser = async (ctx, next) => {
    const { name, password } = ctx.request.body
    //判断用户名或密码是否为空或者空字符串
    if (!name || !password) {
        const error = new Error(errorType.NAME_OR_PASSWORD_IS_REQUIRE)
        return ctx.app.emit('error', error, ctx)
    }
    //判断用户名是否重复
    const result = await service.getUserByName(name)
    if(result.length > 0) {
        const error = new Error(errorType.USER_IS_EXISTS)
        return ctx.app.emit('error', error, ctx)
    }
    //提交数据
    await next()
}

const handlePassword = async (ctx, next) => {
    let { name, password } = ctx.request.body;
    ctx.request.body.password = md5password(password)
    await next()
}

module.exports = {
    verifyUser,
    handlePassword
}