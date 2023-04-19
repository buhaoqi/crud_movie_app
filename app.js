//导入本地模块
const fs = require('fs')
const path = require('path')
//导入第三方模块
const express = require('express')
const ejs = require('ejs')
const expressLayouts = require('express-ejs-layouts')
//导入本地模块
const movieRoutes = require('./routes/movieRoutes')
const dbConnect = require('./config/dbConnect')

//实例化APP
const app = express()

//连接数据库
dbConnect()

//中间件函数
app.set('view engine','ejs')
app.use(expressLayouts)
app.use(express.static(path.join(__dirname,'public')))
app.use(express.urlencoded({extended: true}))
app.use(express.json())
//首页get路由
app.use('/',movieRoutes)

//监听端口3000
const PORT = 3000
app.listen(PORT,() => {
    console.log(`APP运行在: http://127.0.0.1:${PORT}`)
})