const momentServe = require('../service/moment.serve')

class momentController {
    async create(ctx, next) {
        const uid = ctx.user.id;
        const cont = ctx.request.body.content;
       const result = await momentServe.create(cont, uid)
        ctx.body = result;
    }
}

module.exports = new momentController