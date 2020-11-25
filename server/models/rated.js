const mongoose = require('mongoose')
const ratedSchema = mongoose.Schema({
  movieId: {
    type: String,
    required: true
  },
  thumbsUp:{
    type:Number,
    required:true
  },
  thumbsDown:{
    type:Number,
    required:true
  }
})

module.exports = mongoose.model('Movies', ratedSchema)
