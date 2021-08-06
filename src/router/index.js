const fs = require('fs')
const userRouter =  function() {
    const filePath = fs.readdirSync(__dirname)
    filePath.forEach((file) =>{
     if(file === 'index.js') return;
     const router = require(`./${file}`)
       this.use(router.routes())
       this.use(router.allowedMethods())
    })
 }
// const userRouter = (app) =>{
//    const filePath = fs.readdirSync(__dirname)
//    filePath.forEach((file) =>{
//     //   const fileP = `${__dirname}\\${file}`
//     if(file === 'index.js') return;
//     const router = require(`./${file}`)
//       app.use(router.routes())
//       app.use(router.allowedMethods())
//    })
// }

module.exports = {
    userRouter
}