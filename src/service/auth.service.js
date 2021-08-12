const connections = require('../app/database')

class authServe {
    async checkPerimission(tableName,momentId, id) {
        const statement = `SELECT * FROM ${tableName} WHERE id = ? AND uid = ?`;
        const [result] = await connections.execute(statement, [momentId, id]);
        const isPerimission = result.length === 0 ? false : true;
        return isPerimission
    }
} 

module.exports = new authServe