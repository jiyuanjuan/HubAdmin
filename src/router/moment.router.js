const Router = require('koa-router')
const momentRouter = new Router({prefix:'/moment'})

const {
    verifyAuth
} = require('../middleware/login.middleware')

const {
    create,
    detail,
    detailAll
} = require('../controller/moment.controller')

momentRouter.post('/', verifyAuth, create)
momentRouter.get('/:momentId', detail)
momentRouter.get('/', detailAll)

module.exports = momentRouter