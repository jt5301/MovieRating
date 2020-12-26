const mongoose = require('mongoose')
const ratedSchema = mongoose.Schema({
  movieId: {
    type: String,
    required: true
  },
  ThumbsUp:{
    type:Number,
    required:true
  },
  ThumbsDown:{
    type:Number,
    required:true
  }
})

module.exports = mongoose.model('Movies', ratedSchema)
