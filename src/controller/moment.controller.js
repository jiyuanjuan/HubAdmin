const momentService = require('../service/moment.service')

class momentController {
    async create(ctx, next) {
        const uid = ctx.user.id;
        const cont = ctx.request.body.content;
        const result = await momentService.create(cont, uid)
        ctx.body = result;
    }

    async detail(ctx, next) {
        const momentId = ctx.params.momentId;
        const result = await momentService.getMomentById(momentId)
        ctx.body = result
    }

    async detailAll(ctx, next) {
        const { offect, size } = ctx.query
        const result = await momentService.getMomentAll(offect, size)
        ctx.body = result
    }

    async update(ctx, next) {
        const { momentId } = ctx.params
        const { content } = ctx.request.body
        const result = await momentService.patchMoment(content, momentId)
        ctx.body = result
        console.log(ctx.body);
    }

    async remove(ctx, next) {
        const { momentId } = ctx.params
        const result = await momentService.removeMoment(momentId)
        ctx.body = result
    }
}
module.exports = new momentController