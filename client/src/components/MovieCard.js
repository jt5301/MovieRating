import React, {useState, useEffect } from 'react'
import { Button,Grid,Card,CardActions,CardActionArea,CardContent,CardMedia,Typography,makeStyles} from '@material-ui/core';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import {MoreInfoDialog} from './MoreInfoDialog'
import axios from 'axios'

const useStyles = makeStyles((theme)=>({
  cardCounter:{
    display:'flex',
    justifyContent:'space-around'
  },
  counter:{
    fontSize: 'large',
    fontWeight: 'bold',
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    minHeight: 275,
  },
  cardMedia: {
    paddingTop: '100%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  cardActions:{
    justifyContent: 'center',
  },
  cardButtons:{
    color:theme.palette.secondary.main
  },
  title:{
    "& .MuiTypography-root":{
      fontSize:'x-Large'
    },
    textAlign:'center',
  },
}
))

const MovieCard = (props) => {
  const [movieDetails,setMovieDetails] = useState({})
  const [open,setOpen] = useState(false)
  const [ratingButtons, setRatingButtons] = useState({thumbsUp:false,thumbsDown:false})
  let [thumbsUpCounter,setThumbsUp] = useState(0)
  let [thumbsDownCounter,setThumbsDown] = useState(0)
  let movieInDB = false

  useEffect(()=>{
    async function getMovieDetails(){
      try {
        let res = await axios.get(`/movies/getMoreInfo/${props.movie.imdbID}`)
        setMovieDetails(res.data)
      } catch (error) {
        console.error(error)
      }
    }
    async function getMovieFromDB(){
      try {
        let res = await axios.get(`/movies/getMovieFromDB/${props.movie.imdbID}`)
        if(res.data){
          setThumbsUp(res.data.thumbsUp)
          setThumbsDown(res.data.thumbsDown)
        }

      } catch (error) {
        console.error(error)
      }
    }
    getMovieDetails()
    getMovieFromDB()
  },[])

  async function handleRating (rating){
    console.log(movieInDB)
    if(!movieInDB){
      movieInDB = true
      console.log(movieInDB)
      try {
        await axios.post(`/movies/setMovieRating/${props.movie.imdbID}`)
      } catch (error) {
        console.error(error)
      }
    }
    if(rating === 'up'){
      if(ratingButtons.thumbsDown){
        return
      }
      if(!ratingButtons.thumbsUp){
        setThumbsUp(thumbsUpCounter+=1)
        setRatingButtons({...ratingButtons, thumbsUp:true})
      }
      if(ratingButtons.thumbsUp){
        setThumbsUp(thumbsUpCounter-=1)
        setRatingButtons({...ratingButtons, thumbsUp:false})
      }
    }
    if(rating === 'down'){
      if(ratingButtons.thumbsUp){
        return
      }
      if(!ratingButtons.thumbsDown){
        setThumbsDown(thumbsDownCounter+=1)
        setRatingButtons({...ratingButtons, thumbsDown:true})
      }
      if(ratingButtons.thumbsDown){
        setThumbsDown(thumbsDownCounter-=1)
        setRatingButtons({...ratingButtons, thumbsDown:false})
      }
    }
    try {
      await axios.put(`/movies/changeMovieRating/${props.movie.imdbID}`,{thumbsUp:thumbsUpCounter,thumbsDown:thumbsDownCounter})
    } catch (error) {
      console.error(error)
    }
  }

  function handleOpenDialog(){
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false);
  };
  const classes = useStyles();
  return (
              <Grid item md={4}>
                <Card className={classes.card}>
                <CardActionArea onClick = {handleOpenDialog}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={props.movie.Poster}
                    title="Image title"
                  />
                </CardActionArea>

                  <CardContent className={classes.cardContent}>
                    <Typography className = {classes.title} gutterBottom variant="h5" component="h2">
                      {props.movie.Title}
                    </Typography>
                  </CardContent>
                  <CardContent className = {classes.cardCounter}>
                    <div className = {classes.counter} style = {{color:'#12395E'}}>
                      {thumbsUpCounter}
                    </div>
                    <React.Fragment></React.Fragment>
                    <div className = {classes.counter} style = {{color:'red'}}>
                      {thumbsDownCounter}
                    </div>
                  </CardContent>
                  <CardActions className = {classes.cardActions}>
                    <Button onClick = {()=>{handleRating('up')}} className = {classes.cardButtons} size="small" color="primary">
                      <ThumbUpIcon/>
                    </Button>
                    <Button className = {classes.cardButtons} size="small" color="primary" onClick = {handleOpenDialog}>
                      More Info
                    </Button>
                    <MoreInfoDialog basicInfo = {props.movie} detailedInfo = {movieDetails} open={open} handleClose={handleClose} />
                    <Button onClick = {()=>{handleRating('down')}} className = {classes.cardButtons} size="small" color="primary">
                      <ThumbDownIcon/>
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
  )
}

export default MovieCard
