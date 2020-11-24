const express = require("express");
const router = express.Router();
const omdbRootUrl = 'http://www.omdbapi.com/?'
router.get("/search/:keywords", async (req, res, next) => {
  const movie = await axios.get(omdbRootUrl + `s=${req.params.keywords}&type=movie` + `&apikey = ${process.env.omdbKey}`)
  res.status(200).json(movie.data);

});

module.exports = router;
