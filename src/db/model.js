// 数据模型
const mongoose = require('./db')

// 定义User Schema
const UserSchema = mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true //唯一
    },
    password:String,
    age:Number,
    city:String,
    gender:{
        type:Number,
        default:0 //0保密1男2女
    }
},{
    timestamps:true,//时间戳 自动添加文档的创建时间
})

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
const User = mongoose.model('user',UserSchema)
const Comment = mongoose.model('comment',CommentSchema)

module.exports = {
    User,
    Comment
}