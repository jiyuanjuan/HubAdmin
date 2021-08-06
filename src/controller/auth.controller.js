class authController {
  login = (ctx, next) => {
      const { name, password } = ctx.request.body;
      ctx.response.body = `欢迎回来，${name}`
    }
}

module.exports = new authController()