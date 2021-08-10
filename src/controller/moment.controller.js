const momentServe = require('../service/moment.serve')

class momentController {
    async create(ctx, next) {
        const uid = ctx.user.id;
        const cont = ctx.request.body.content;
        const result = await momentServe.create(cont, uid)
        ctx.body = result;
    }

    async detail(ctx, next) {
        const momentId = ctx.params.momentId;
        const result = await momentServe.getMonentById(momentId)
        ctx.body = result
    }

    async detailAll(ctx, next) {
        const result = await momentServe.getMonentAll()
        ctx.body = result
    }
}

module.exports = new momentController