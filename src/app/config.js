const dotenv = require('dotenv')  //会自动找根目录里的env

dotenv.config()

module.exports = {
    APP_PORT,
    MYSQL_HOST,
    MYSQL_PORT,
    MYSQL_DATABASE,
    MYSQL_NAME,
    MYSQL_PASSWORD,
} = process.env

