const connections = require('../app/database')

class UserService{
    async create(user) {
        const statment = `INSERT INTO users (name, password) VALUES (?,?)`
        connections.query(statment, ['lilei',123321])
        return "用户创建成功"
    }
}

module.exports = new UserService()