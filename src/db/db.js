// 连接数据库(mongodb 服务端)
const mongoose = require('mongoose')

mongoose.set('strictQuery', false);

const url = 'mongodb://localhost:27017'; // 本地启动的mongodb服务
const dbName = 'comment2'

// 连接数据库
mongoose.connect(`${url}/${dbName}`,{
    useUnifiedTopology: true,
    useNewUrlParser: true
})

const conn = mongoose.connection

conn.on('error',err=>{
    console.error('mongoose连接出错',err);
})

module.exports = mongoose

console.log('连接成功请访问 localhost:3000')