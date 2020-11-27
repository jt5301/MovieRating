const express = require("express");
const router = express.Router();
const omdbRootUrl = `http://www.omdbapi.com/?apikey=${process.env.omdbKey}&`
const axios = require ('axios')
const RatedMovie = require('../models/rated')

router.get("/search/:keywords", async (req, res, next) => {
  const movie = await axios.get(omdbRootUrl+`s=${req.params.keywords}&type=movie`)
  res.status(200).json(movie.data.Search);

});

router.get('/getMoreInfo/:imdbID',async(req,res,next)=>{
  const movie = await axios.get(omdbRootUrl+`i=${req.params.imdbID}&plot=full`)
  res.status(200).json(movie.data)
})

router.post('/setMovieRating',async(req,res,next)=>{
  const movie = new RatedMovie({
    movieId:'tt4975722',//update here
    thumbsUp:1,//update here
    thumbsDown:0//update here
  })
  try {
    const savedMovie = await movie.save()
    res.status(200).json('test success')
  } catch (error) {
    console.error(error)
  }
})

router.put('/changeMovieRating',async(req,res,next)=>{
  try {
    const movie = await RatedMovie.findOne({
      movieId:'tt4975722'//update here
    })
    const updateRating = {
      $set: {
         thumbsUp: movie.thumbsUp+=1,//update here
      },
   };
    await RatedMovie.updateOne({
      movieId:'tt4975722'//update here
    },updateRating)
    res.status(200).json('test success')
  } catch (error) {
    console.error(error)
  }
})
module.exports = router;
