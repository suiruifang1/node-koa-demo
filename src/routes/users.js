const router = require('koa-router')()
const {register,login} = require('../controller/user')

router.prefix('/users')

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

// 注册（对接数据库）
router.post('/register', async (ctx, next) =>{
  const userinfo = ctx.request.body // post获取参数
  try{
    const data = await register(userinfo)
    console.log(data,'data')
    ctx.body = {
      error:0,
      data
    }
  }catch(ex){
    ctx.body = {
      error:1,
      message:'注册失败'
    }
  }
})

// 登录（对接数据库）
router.post('/login', async (ctx, next) =>{
  const {username,password} = ctx.request.body // post获取参数
  const data = await login(username,password)
  console.log(data,'data')
  if(!data){
    return ctx.body = {
      error:1,
      message:'登录失败'
    }
  }
  ctx.body = {
    error:0,
    data
  }
  ctx.session.userInfo = {
    username
  }
})

module.exports = router
