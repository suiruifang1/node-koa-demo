const router = require('koa-router')()
const User = require('../model/User')

router.prefix('/users')

// router.get('/', async (ctx, next) =>{
//   ctx.body = 'this is a users response!'
// })

// router.get('/bar', async (ctx, next) =>{
//   ctx.body = 'this is a users/bar response'
// })

// 登录（对接数据库）
  router.get('/login', async (ctx, next) =>{
  const {username,password} = ctx.query
  // const {username,password} = ctx.response.body post获取参数
  const user = await User.findOne({
    username,
    password
  })
  if(user){
    // 登录成功
     ctx.session.userInfo = user
     return ctx.body = {
      errno:0,
      data:user
    }
  }
  ctx.body = {
    errno:-1,
    message:'用户名或密码错误'
  }
})

// 模拟登录
  router.get('/login-mock', function (ctx, next) {
  let str = ''
  const query = ctx.query
  
  if(query.username){
    // 模拟登录成功
    ctx.session.userInfo = {
      username:query.username
    }
     str = 'ok'
  }else{
    // 模拟登录失败 不用session
    str = 'failed'
  }
  ctx.body = str
})

router.get('/login-check-mock', function (ctx, next) {
  ctx.body = ctx.session.userInfo || {}
})

module.exports = router
