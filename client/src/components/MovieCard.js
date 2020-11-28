import React, { useContext, useState, useEffect } from 'react'
import { Button, TextField,Grid,Card,CardActions,CardContent,CardMedia,Typography,DialogTitle,Dialog,DialogContent,DialogContentText,DialogActions,makeStyles} from '@material-ui/core';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import axios from 'axios'

const useStyles = makeStyles((theme)=>({
  dialogBox:{
    "& .MuiPaper-root": {
      width:'75%',
      height:'75%',
    },
  },
  posterContainer:{
  width:'100%',
  marginBottom:'3%',
  display:'flex',
  justifyContent: 'center'
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
    justifyContent: 'center'
  },
  dialogTitle:{
    "& .MuiTypography-root":{
      fontSize:'x-Large'
    },
    textAlign:'center',

  },
  extraInfoItem:{
    display:'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontWeight:'bold',
    marginBottom:'2%',
    fontSize:'small',
    marginLeft:'5%'
  },
  extraInfo:{
    marginBottom:'3%',
    display:'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent:'center'
  },
  extraInfoText:{
    textAlign:'center',
    fontWeight:'normal'
  },
  imdbLink:{
    textDecoration:'none',
    color:'inherit'
  }
}
))

function MoreInfoDialog(props){
  const classes = useStyles()
  console.log(props.basicInfo)
  return(
    <div>
      <Dialog
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className = {classes.dialogBox}
      >
        <DialogTitle className = {classes.dialogTitle} id="alert-dialog-title">{props.basicInfo.Title}</DialogTitle>
        <DialogContent className = {classes.contentContainer}>
        <div id = 'movieInfo' className = {classes.posterContainer}>
          <img src = {props.basicInfo.Poster}/>
          <div className = {classes.extraInfo}>
            <div className = {classes.extraInfoItem}>Date Released: <div className = {classes.extraInfoText}>{props.basicInfo.Year} </div> </div>
            <div className = {classes.extraInfoItem}>Director(s): <div className = {classes.extraInfoText}>{props.detailedInfo.Director} </div> </div>
            <div className = {classes.extraInfoItem}>Writer(s): <div className = {classes.extraInfoText}>{props.detailedInfo.Writer} </div> </div>
            <div className = {classes.extraInfoItem}>Cast: <div className = {classes.extraInfoText}>{props.detailedInfo.Actors}</div></div>
          </div>
        </div>
          <DialogContentText id="alert-dialog-description">
            {props.detailedInfo.Plot}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.onClose} color="primary">
          <a className = {classes.imdbLink} href = {`https://www.imdb.com/title/${props.basicInfo.imdbID}/`}>IMDB Page</a>
          </Button>
          <Button onClick={props.onClose} color="primary" autoFocus>
            Close
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
