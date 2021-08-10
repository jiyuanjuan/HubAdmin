const connections = require('../app/database')

class momentServe {
    async create(cont, uid) {
        const statement = `INSERT INTO moment (content, uid) VALUES (?, ?)`;
        const [result] = await connections.execute(statement, [cont, uid])
        return result
    }

    async getMomentById(momentId) {
        const statement = `
            SELECT 
                moment.id, moment.content, JSON_OBJECT('id',users.id,'name',users.name) user,
                moment.createAt, moment.updateAt
            FROM moment 
            LEFT JOIN users 
            on moment.uid = users.id 
            WHERE moment.id = ?
        `;
        const [result] = await connections.execute(statement, [momentId])
        return result[0]
    }

    async getMomentAll(offect, size) {
        const statement = `
        SELECT 
            moment.id, moment.content, JSON_OBJECT('id',users.id,'name',users.name) user,
            moment.createAt, moment.updateAt
        FROM moment 
        LEFT JOIN users 
        on moment.uid = users.id 
        LIMIT ?,?
    `;
        const [result] = await connections.execute(statement, [offect, size])
        return result
    }

    async patchMoment(content, momentId) {
        const statement = `UPDATE moment SET content = ? WHERE id = ?`
        const [result] = await connections.execute(statement, [content, momentId])
        return result
    }

    async removeMoment(momentId) {
        const statement = `DELETE FROM moment WHERE id = ? `
        const [result] = await connections.execute(statement, [momentId])
        return result
    }
}

module.exports = new momentServe