const connections = require('../app/database')

const verifyUser = async (ctx, next) => {
    const { user, password } = ctx.request.body
    //判断用户名或密码是否为空或者空字符串
    if (!user || !password) {
        ctx.body = "用户名或密码不能为空"
        return
    }
    //判断用户名是否重复
    const staement = `SELECT * FROM users WHERE name = ?`
    console.log(connections.query(staement, [user]))
    //提交数据
    await next()
}

module.exports = {
    verifyUser
}