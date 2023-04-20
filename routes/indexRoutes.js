//导入第三方模块
const express = require('express')
//导入本地模块
const indexController  = require('../controllers/indexController')
//实例化路由对象
const router = express.Router()

//创建路由表
// '/' => GET
router.get(['/','/movie'],indexController.app_index)

module.exports = router