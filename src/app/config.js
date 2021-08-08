const dotenv = require('dotenv')  //会自动找根目录里的env
const fs = require('fs')
const path = require('path')

const PRIVATE_KEY = fs.readFileSync(path.resolve(__dirname,'./keys/private.key'))
const PUBLIC_KEY = fs.readFileSync(path.resolve(__dirname,'./keys/public.key'))

dotenv.config()

module.exports = {
    APP_PORT,
    MYSQL_HOST,
    MYSQL_PORT,
    MYSQL_DATABASE,
    MYSQL_NAME,
    MYSQL_PASSWORD,
} = process.env

module.exports.PRIVATE_KEY = PRIVATE_KEY
module.exports.PUBLIC_KEY = PUBLIC_KEY