const router = require('koa-router')()

router.prefix('/api')

// ctx是req和res的集合

// 模拟获取留言板
router.get('/list', async (ctx, next) =>{
    const { query } = ctx // 获取req query参数
    ctx.body ={
        errno: 0,
        data: [
            {content:'留言1',user:'张三'},
            {content:'留言2',user:'李四'},
            {content:'留言3',user:'王五'}
        ]
    } // res的功能
})

// 模拟创建留言板
router.post('/create', async (ctx, next)=> {
    const { body } = ctx.request // 获取req body参数
    ctx.body = {
        errno:0,
        message:'创建成功'
    }
})

module.exports = router