const Router = require('koa-router')
const commentRouter = new Router({ prefix: '/comment' })

const {
    verifyAuth,
    verifyPermission
} = require('../middleware/login.middleware')

const {
    create,
    reply,
    update
} = require('../controller/comment.controller')

commentRouter.post('/', verifyAuth, create)
commentRouter.post('/:commentId/reply', verifyAuth, reply)
commentRouter.patch('/:commentId', verifyAuth, verifyPermission('comment'), update)

module.exports = commentRouter