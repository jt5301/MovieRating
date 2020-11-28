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
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
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
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Rate a Movie Below
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
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
