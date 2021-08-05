const service = require('../service/user.service')

class UserController {
    async create(ctx, next) {
        //接收数据
    const user = ctx.request.body
        //创建用户
    const result = await service.create(user)
        //返回数据
    ctx.body = result
    }
}

module.exports = new UserController() 