const User = require('../model/User')

// 注册
async function register(userinfo = {}){
    // 插入数据库
    const newUser = await User.create(userinfo)
    return newUser
}

// 登录
async function login(username){
    // 插入数据库
    const login = await User.findOne({username})
    if(!login){
        return false
    }
    return login
}

module.exports = {
    register,
    login
}