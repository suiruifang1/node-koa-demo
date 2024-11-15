const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const static = require('koa-static')
const session = require('koa-generic-session')
const cors = require('koa2-cors')

const index = require('./routes/index')
const users = require('./routes/users')
const comments = require('./routes/comments')

// 错误处理器
onerror(app)

// 服务端支持跨域
app.use(cors({
  origin: 'http://localhost:8080',
  // origin: '*',// 所有都可以跨域 但不支持cookie
  Credential:true,// 允许跨域时带cookie
}))

// middlewares 中间件
app.use(bodyparser({ // 获取request body
  enableTypes:['json', 'form', 'text'] // 使用类型
}))
app.use(json())
app.use(logger()) // 日志格式
app.use(static(__dirname + '/public')) // 静态文件服务 例如http://localhost:3000/images/1.jpg

app.use(views(__dirname + '/views', { // 服务端模板引擎
  extension: 'pug' // pug 语法 类似html
}))

app.keys = ['asda123124%$#%^'] // 密钥
// 自动配置了cookle和session
app.use(session({
  // 配置cookie
  cookie:{
    path:'/', // cookie 在根目录下有效 localhost:3000/
    httpOnly:true,// cookie 只允许服务端操作
    maxAge:24 * 60 * 60 * 1000 // cookie过期时间
  }
}))

// logger 打印当前请求所花费的时间
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

  // 模拟登录（为了使用中间件）
  // app.use(async(ctx,next)=>{
  //   const {query} = ctx
  //   if(query.user === 'zhangsan'){
  //     // 模拟登录成功
  //     await next()
  //   }else{
  //     ctx.body = '请登录'
  //   }
  // })
  
  // app.use(loginCheck) //全部的路由都校验

// routes 注册路由 
// allowedMethods 对于404或者返回是空的补充
app.use(index.routes(), index.allowedMethods())
app.use(users.routes(), users.allowedMethods())
app.use(comments.routes(), comments.allowedMethods())

// error 错误处理
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
