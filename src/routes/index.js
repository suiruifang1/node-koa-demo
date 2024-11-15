const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

// 测试session记录访问次数
router.get('/session-test',async(ctx,next)=>{
  if(ctx.session.viewcount == null){
    // 用户尚未访问
    ctx.session.viewcount = 0
  }
  // 用户访问过了
  ctx.session.viewcount++//递增
  ctx.body = {
    title:'session-test',
    viewcount:ctx.session.viewcount
  }
})

module.exports = router
