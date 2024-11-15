// 使用model 操作数据
const User = require('../model/User')

console.log('ok');

async function run (){
    // 新增数据
    // await User.create({
    //     "username": "lisi",
    //     "password": "123",
    //     "age": 11,
    //     "city": "shanghai",
    // })

    // 查询列表数据 排序 1正序 -1倒叙 最新顺序的可根据_id
    // const userList = await User.find().sort({'age':-1})

    // 查询单条数据
    // const userDetail = await User.findOne({'username':'zhangsan'}).sort({'age':-1})

    // 更新
    // const userUpdate = await User.findOneAndUpdate(
    //     {'username':'zhangsan'},
    //     {age:88},//更新的内容
    //     {
    //         new:true//返回更新后的数据
    //     }
    // )

    // 删除
    // const userDelete = await User.deleteOne({'username':'lisi'})
}
run()
