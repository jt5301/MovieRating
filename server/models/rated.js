const mongoose = require('mongoose')
const ratedSchema = mongoose.Schema({
  user: {
    type: String,
    required: true
  },
  list: {
    type: Object
  }
})

module.exports = mongoose.model('rated', ListSchema)
