const connections = require('../app/database')

class CommentService {
    async create(uid, content, momentId) {
        const statement = `INSERT INTO comment (uid, content, moment_id) VALUES (?, ?, ?)`;
        const [result] = await connections.execute(statement, [uid, content, momentId])
        return result;
    }

    async reply(uid, content, momentId, commentId) {
        const statement = `INSERT INTO comment (uid, content, moment_id, comment_id) VALUES (?, ?, ?, ?)`;
        const [result] = await connections.execute(statement, [uid, content, momentId, commentId])
        return result;
    }

    async update(content, commentId) {
        const statement = `UPDATE comment SET content = ? WHERE id = ?`;
        const [result] = await connections.execute(statement, [content, commentId])
        return result;
    }
}

module.exports = new CommentService()