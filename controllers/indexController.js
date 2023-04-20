const Movie = require('../models/movieModel')

const app_index = async(req,res) => {
    try{
        const {page = 1, limit = 6,search = ''} = req.query
        //获取数据
        const data = await Movie.find({title:{$regex:search}})
                                .limit(limit*1)
                                .skip((page - 1) * limit)

        const count = await Movie.countDocuments()

        let totalPage = Math.ceil(count/limit)

        //把数据注入到视图
        res.render('index', { data,page,limit,count,totalPage})
    } catch(err){
        console.log(err)
    }
}

module.exports = {
    app_index
}