const express = require("express");
const router = express.Router();
const omdbRootUrl = `http://www.omdbapi.com/?apikey=${process.env.omdbKey}&`
const axios = require ('axios')
router.get("/search/:keywords", async (req, res, next) => {
  const movie = await axios.get(omdbRootUrl+`s=moonlight&type=movie`)
  console.log(movie.data)
  res.status(200).json(movie.data);

});

router.get('/getMoreInfo',async(req,res,next)=>{
  const movie = await axios.get(omdbRootUrl+`i=tt4975722&plot=full`)
  console.log(movie)
  res.status(200).json(movie.data)
})
module.exports = router;
