import React, { useContext, useState, useEffect } from 'react'
import { Button, TextField,Grid,Card,CardActions,CardContent,CardMedia,Typography,DialogTitle,Dialog,DialogContent,DialogContentText,DialogActions,makeStyles} from '@material-ui/core';
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
  poster:{
    height: '100%',
  },
  cardContent: {
    flexGrow: 1,
  },
  cardActions:{
    justifyContent: 'center'
  },
  title:{
    textAlign:'center'
  },
  dialogClose:{
    width:'10%',
    paddingLeft:'10px',
    fontSize:'x-large',
    borderRadius:'20px',
    height:'40px',
    transform: 'rotate(45deg)'
  },
  dialogBox:{
      "& .MuiPaper-root": {
        width:'100%',
        height:'100%',
  },

}
  // font-size: xx-large;border-radius: 20px;margin-top: 5px;margin-left: 5px;height: 40px;width: 40px;background-color: white;transform: rotate(45deg);'
}))

function MoreInfoDialog(props){
  const classes = useStyles()
  console.log(props)
  return(
    <div>
      <Dialog
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle className = {classes.dialogTitle} id="alert-dialog-title">{props.basicInfo.Title}</DialogTitle>
        <DialogContent>
        <img src = {props.basicInfo.Poster}/>
          <DialogContentText id="alert-dialog-description">
            {props.detailedInfo.Plot}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.onClose} color="primary">
            Disagree
          </Button>
          <Button onClick={props.onClose} color="primary" autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

const MovieCard = (props) => {
  const [movieDetails,setMovieDetails] = useState({})
  const [open,setOpen] = useState(false)

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
                    <Button size="small" color="primary" onClick = {handleOpenDialog}>
                      More Info
                    </Button>
                    <MoreInfoDialog basicInfo = {props.movie} detailedInfo = {movieDetails} open={open} onClose={handleClose} />
                    <Button size="small" color="primary">
                      <ThumbDownIcon/>
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
  )
}

export default MovieCard
