import React from 'react'
import { Button,DialogTitle,Dialog,DialogContent,DialogContentText,DialogActions,makeStyles} from '@material-ui/core';

const useStyles = makeStyles((theme)=>({
  dialogBox:{
    "&.MuiPaper-root": {
      width:'75%',
      height:'75%',
    },
  },
  posterContainer:{
    "&.MuiDialogContent-root":{
      height:'100%'
    },
  width:'100%',
  display:'flex',
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
  description:{
    fontWeight:'bold',
    fontSize:'small',
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
    color:theme.palette.secondary.main
  },


}
))

export const MoreInfoDialog = (props) => {
    const classes = useStyles()
    function onClose(){
      props.handleClose()
    }
    return(
      <div>
        <Dialog
          open={props.open}
          onClose={onClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          className = {classes.dialogBox}
        >
          <DialogTitle className = {classes.dialogTitle} id="alert-dialog-title">{props.basicInfo.Title}</DialogTitle>
          <DialogContent className = {classes.contentContainer}>
          <div id = 'movieInfo' className = {classes.posterContainer}>
            <img alt = {`poster for ${props.basicInfo.Title}`} src = {props.basicInfo.Poster}/>
            <div className = {classes.extraInfo}>
              <div className = {classes.extraInfoItem}>Date Released: <div className = {classes.extraInfoText}>{props.basicInfo.Year}</div>
              </div>
              <div className = {classes.extraInfoItem}>Director(s): <div className = {classes.extraInfoText}>{props.detailedInfo.Director} </div>
              </div>
              <div className = {classes.extraInfoItem}>Writer(s): <div className = {classes.extraInfoText}>{props.detailedInfo.Writer}  </div>
              </div>
              <div className = {classes.extraInfoItem}>Cast: <div className = {classes.extraInfoText}>{props.detailedInfo.Actors}</div></div>
            </div>
          </div>

          </DialogContent>
          <DialogContent>
          <div className = {classes.description}>Description:</div>
          <DialogContentText id="alert-dialog-description">
              {props.detailedInfo.Plot}
            </DialogContentText>
          </DialogContent>
          <DialogActions className = {classes.dialogButtons}>
            <Button autoFocus onClick={props.onClose}>
            <a className = {classes.imdbLink} href = {`https://www.imdb.com/title/${props.basicInfo.imdbID}/`}>IMDB Page</a>
            </Button>
            <Button onClick={onClose} color="secondary" autoFocus>
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>

  )
}

