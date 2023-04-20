const Movie = require('../models/movieModel')

const movie_add_get = async(req,res) => {
    try{
        //获取数据
        const data = await Movie.find().limit(9)
        //把数据注入到视图
        // res.json(data)
        res.render('index',{data})
    } catch(err){
        console.log(err)
    }
}
const movie_add_post = (req,res) => {
    
}

module.exports = {
    movie_add_get,
    movie_add_post,
}