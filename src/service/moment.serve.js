const connections = require('../app/database')

class momentServe {
    async create(cont, uid) {
        const statement = `INSERT INTO moment (content, uid) VALUES (?, ?)`;
        const [result] = await connections.execute(statement, [cont, uid])
        return result
    }
}

module.exports = new momentServe