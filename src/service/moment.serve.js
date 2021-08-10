const connections = require('../app/database')

class momentServe {
    async create(cont, uid) {
        const statement = `INSERT INTO moment (content, uid) VALUES (?, ?)`;
        const [result] = await connections.execute(statement, [cont, uid])
        return result
    }

    async getMonentById(momentId) {
        const statement = `
            SELECT 
                moment.content, JSON_OBJECT('id',users.id,'name',users.name) user,
                moment.createAt, moment.updateAt
            FROM moment 
            LEFT JOIN users 
            on moment.uid = users.id 
            WHERE moment.id = ?
        `;
        const [result] = await connections.execute(statement, [momentId])
        return result[0]
    }

    async getMonentAll() {
        const statement = `SELECT * FROM moment`;
        const [result] = await connections.execute(statement)
        return result
    }
}

module.exports = new momentServe