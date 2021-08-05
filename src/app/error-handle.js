const errorType = require('../constants/error-types')

const errorHandle = (error, ctx) => {
    let status, message;
    switch (error.message) {
        case errorType.NAME_OR_PASSWORD_IS_REQUIRE:
            status = 400;    //bad Request
            message = '用户名或密码不能为空'
            break;
        case errorType.USER_IS_EXISTS:
            status = 409;    //conflict 用户名冲突
            message = '用户名不能重复'
            break;
        default:
            status = 404;
            message = '没有找到'
            break;
    }
    ctx.statu = status;
    ctx.body = message;
}

module.exports = errorHandle