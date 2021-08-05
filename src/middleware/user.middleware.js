//空字符串取反为true

const verifyUser = async (ctx, next) => {
    const { user, password } = ctx.request.body
    //判断用户名或密码是否为空或者空字符串
    if(!user||!password) {

    }
    //判断用户名是否重复

    //提交数据
    await next()
}

module.exports = {
    verifyUser
}