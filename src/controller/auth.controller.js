const jwt = require('jsonwebtoken')
const { PRIVATE_KEY } = require('../app/config')

class authController {
  login = (ctx, next) => {
    const { id, name } = ctx.user;
    const token = jwt.sign({id,name}, PRIVATE_KEY, {
      expiresIn: 60 * 10,
      algorithm:'RS256'
    })
    ctx.response.body = { id, name, token}
  }

  success = (ctx, next) => {
    ctx.body = "验证成功"
  }
}

module.exports = new authController()