const connections = require('../app/database')

class authServe {
    async checkPatch(momentId, id) {
        const statement = `SELECT * FROM moment WHERE id = ? AND uid = ?`
        const [result] = await connections.execute(statement, [momentId, id])
        const isPerimission = result.length === 0 ? false : true
        return isPerimission
    }
}

module.exports = new authServe