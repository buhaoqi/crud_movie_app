const mongoose = require('mongoose')
const movieSchema = new mongoose.Schema({
    directors:{ type: [String],required: true},
    genre:{ type: String,required: true},
    rate:{ type: String,required: true},
    cover_x:{ type: String,required: true},
    star:{ type: String,required: true},
    title:{ type: String,required: true},
    url:{ type: String,required: true},
    casts:{ type: [String],required: true},
    cover:{ type: String,required: true},
    id:{ type: String,required: true},
    cover_y:{ type: String,required: true},
})
const Movie = mongoose.model('Movie',movieSchema)
module.exports = Movie