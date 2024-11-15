// 数据模型
const mongoose = require('../db/db')

// 定义Comment Schema
const CommentSchema = mongoose.Schema({
    content:{
        type:String,
        required:true,
    },
    username:String
},{
    timestamps:true,//时间戳 自动添加文档的创建时间
})


// 定义 model
const Comment = mongoose.model('comment',CommentSchema)

module.exports = Comment