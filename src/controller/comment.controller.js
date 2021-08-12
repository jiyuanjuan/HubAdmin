const commentService = require('../service/comment.service')

class commentController {
    async create(ctx, next) {
        const uid = ctx.user.id;
        const { content, momentId } = ctx.request.body
        const result = await commentService.create(uid, content, momentId)
        ctx.body = result
    }

    async reply(ctx, next) {
        const uid = ctx.user.id;
        const { content, momentId } = ctx.request.body;
        const commentId = ctx.params.commentId;
        const result = await commentService.reply(uid, content, momentId, commentId)
        ctx.body = result
    }

    async update(ctx, next) {
        const commentId = ctx.params.commentId;
        const { content } = ctx.request.body;
        const result = await commentService.update(content, commentId);
        ctx.body = result;
    }
}

module.exports = new commentController()