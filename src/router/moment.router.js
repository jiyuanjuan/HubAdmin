const Router = require('koa-router')
const momentRouter = new Router({ prefix: '/moment' })

const {
    verifyAuth,
    verifyPermission
} = require('../middleware/login.middleware')

const {
    create,
    detail,
    detailAll,
    update
} = require('../controller/moment.controller')

momentRouter.post('/', verifyAuth, create)
momentRouter.get('/:momentId', detail)
momentRouter.get('/', detailAll)
momentRouter.patch('/:momentId', verifyAuth, verifyPermission, update)

module.exports = momentRouter