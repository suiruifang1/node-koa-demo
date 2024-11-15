const router = require('koa-router')()
const Comment = require("../model/Comment")
const loginCheck = require("../middlewares/loginCheck")

router.prefix('/api')

// ctx是req和res的集合

// 获取留言板
router.get('/list',loginCheck,async (ctx, next) =>{
    const { query } = ctx // 获取req query参数
    const  commentList = await Comment.find().sort({'_id':-1})
    ctx.body ={
        errno: 0,
        data: commentList
    } // res的功能
})

// 创建留言板
router.post('/create',loginCheck, async (ctx, next)=> {
    const { body } = ctx.request // 获取req body参数
    
    const {content,username} = body //获取数据
    const data = await Comment.create({ //插入数据库
        content,
        username
    })
    ctx.body = {
        errno:0,
        message:'创建成功',
        data
    }
})

module.exports = router