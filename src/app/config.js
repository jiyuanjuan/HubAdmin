const dotenv = require('dotenv')  //会自动找根目录里的env

dotenv.config()

module.exports = {
    APP_PORT
} = process.env

