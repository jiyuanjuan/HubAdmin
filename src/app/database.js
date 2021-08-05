const mysql = require('mysql2')
const config = require('../app/config')

const connections = mysql.createPool({
    host: config.MYSQL_HOST,
    port: config.MYSQL_PORT,
    database: config.MYSQL_DATABASE,
    user: config.MYSQL_NAME,
    password: config.MYSQL_PASSWORD,
})


//测试数据库是否连接成功
connections.getConnection((err, conn) => {
    conn.connect((err) => {
        if(err) {
            console.log('连接数据库失败',err)
        } else {
            console.log('连接数据库成功')
        }
    })
})

module.exports = connections.promise()