import React, {useContext,useState,useEffect} from 'react';
import {AppBar,CssBaseline,Grid,Typography,Container} from '@material-ui/core'
// import AppBar from '@material-ui/core/AppBar';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import Grid from '@material-ui/core/Grid';
// import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
// import Container from '@material-ui/core/Container';
import { SearchContext } from '../hooks/SearchContext'
import MovieCard from '../components/MovieCard'
import axios from 'axios'

const useStyles = makeStyles((theme) => ({
  mainContainer:{
    backgroundColor: theme.palette.primary.main,
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
    backgroundColor:'white'
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),

  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  heroText:{
    fontWeight:'bold',
    textDecoration:'underline'
  }
}));


export default function MovieDisplay() {
  const [movies,setMovies] = useState([])
  let searchTerm = useContext(SearchContext)
  useEffect( ()=>{
    async function getMovies(){
      try {
        const movies = await axios.get('/movies/search/twilight')
        setMovies(movies.data)
      } catch (error) {
        console.log(error)
      }
    }
    getMovies()
  },[])
  useEffect(()=>{
    async function getMovies(){
      try {
        const movies = await axios.get(`/movies/search/${searchTerm.movieKeyword}`)
        setMovies(movies.data)
      } catch (error) {
        console.log(error)
      }
    }
    getMovies()
  },[searchTerm.movieKeyword])
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
      </AppBar>
      <main className = {classes.mainContainer}>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography className = {classes.heroText} component="h1" variant="h2" align="center"  gutterBottom>
              Rate a Movie Below
            </Typography>
            <Typography variant="h5" align="center" paragraph>
              Leave your rating after searching for a movie. You can only vote once per movie!
            </Typography>
          </Container>
        </div>

        <Container className={classes.cardGrid} maxWidth="lg">
          <Grid container spacing={4}>
            {movies.map((movie) => (
              <MovieCard key = {movie.imdbID} movie = {movie}/>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Something here to give the footer a purpose!
        </Typography>
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}
