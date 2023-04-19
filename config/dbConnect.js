//导入第三方模块
const mongoose = require('mongoose')

const dbConnect = () => {
    //mongoose.connect():使用指定地址连接MongoDB数据库,返回数据库实例
    mongoose.connect("mongodb://127.0.0.1:27017/movieAppDB")
    //mongoose.connection:该属性指向数据库实例
    //.on()是Node.js中注册事件的方法
    mongoose.connection.on('connected', () => {
        console.log('数据库连接成功');
    })
    mongoose.connection.on('error', (err) => {
        console.log('数据库连接失败:' + err);
    })
    mongoose.connection.on('disconnected', () => {
        console.log('数据库已断开');
    })
}

module.exports = dbConnect