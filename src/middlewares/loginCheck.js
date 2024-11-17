// 登录验证的中间件

async function loginCheck(ctx,next){
    const userInfo = ctx.session?.userInfo
    if(userInfo && userInfo.username){
        // 登录验证成功
        return await next()
    }
    ctx.body = {
        errno:-1,
        message:'请登录'
    }
}
module.exports = loginCheck