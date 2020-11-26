import React, { useContext, useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import axios from 'axios'

const useStyles = makeStyles((theme)=>({
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
    justifyContent: 'center'
  },
  title:{
    textAlign:'center'
  }
}))

const MovieCard = (props) => {
  const [movieDetails,setMovieDetails] = useState({})
  useEffect(()=>{
    await a
  },[])
  console.log(props)
  const classes = useStyles();
  return (
              <Grid item   md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={props.movie.Poster}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography className = {classes.title} gutterBottom variant="h5" component="h2">
                      {props.movie.Title}
                    </Typography>
                  </CardContent>
                  <CardActions className = {classes.cardActions}>
                    <Button size="small" color="primary">
                      <ThumbUpIcon/>
                    </Button>
                    <Button size="small" color="primary">
                      More Info
                    </Button>
                    <Button size="small" color="primary">
                      <ThumbDownIcon/>
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
  )
}

export default MovieCard
