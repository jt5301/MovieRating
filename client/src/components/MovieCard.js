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
  const [thumbsUp,setThumbsUp] = useState(0)
  const [thumbsDown,setThumbsDown] = useState(0)
  useEffect(()=>{
    async function getMovieDetails(){
      try {
        let res = await axios.get(`/movies/getMoreInfo/${props.movie.imdbID}`)
        setMovieDetails(res.data)
      } catch (error) {
        console.error(error)
      }
    }
    getMovieDetails()
  },[])

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
                      0
                    </div>
                    <React.Fragment></React.Fragment>
                    <div className = {classes.counter} style = {{color:'red'}}>
                      0
                    </div>
                  </CardContent>
                  <CardActions className = {classes.cardActions}>
                    <Button className = {classes.cardButtons} size="small" color="primary">
                      <ThumbUpIcon/>
                    </Button>
                    <Button className = {classes.cardButtons} size="small" color="primary" onClick = {handleOpenDialog}>
                      More Info
                    </Button>
                    <MoreInfoDialog basicInfo = {props.movie} detailedInfo = {movieDetails} open={open} handleClose={handleClose} />
                    <Button className = {classes.cardButtons} size="small" color="primary">
                      <ThumbDownIcon/>
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
  )
}

export default MovieCard
