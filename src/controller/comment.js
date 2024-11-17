const Comment = require('../model/Comment')

// 列表
async function list(query){
    const contentList = await Comment.find(query).sort({'_id':-1})
    return contentList
}

// 创建
async function create(content){
    // 插入数据库
    const contentCreate = await Comment.findOne(content)
    if(!contentCreate.username){
        return false
    }
    return contentCreate
}

module.exports = {
    list,
    create
}