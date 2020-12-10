import React, {useContext,useState,useEffect} from 'react';
import {AppBar,CssBaseline,Grid,Typography,Container, CircularProgress} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { SearchContext } from '../hooks/SearchContext'
import MovieCard from '../components/MovieCard'
import axios from 'axios'
import githubLogo from '../icons/githubLogo.svg'
import linkedinLogo from '../icons/linkedinLogo.svg'
import { gql, useQuery } from '@apollo/client';


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
  },
  loading:{
    color:'white'
  },
  loadingContainer:{
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '10%',
    paddingBottom:'10%'
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: '2%',
  },
  iconContainer:{
    display: 'flex',
    justifyContent: 'space-evenly',
    marginLeft: '25%',
    marginRight: '25%',
    paddingTop: '1%',
  }
}));

const MOVIES_QUERY = gql`
  query movies($searchTerm:String!) {
    Title
    Plot
  }
`

export default function MovieDisplay() {
  const [movies,setMovies] = useState([])
  const [loadSpinner,setLoadspinner] = useState(false)
  const {loading,error,data} = useQuery(MOVIES_QUERY)

  let searchTerm = useContext(SearchContext)
  useEffect( ()=>{
    async function getMovies(){
      try {
        let localStorageTerm = localStorage.getItem('searchTerm')
        let movies
        if(localStorageTerm){
          movies = await axios.get(`/movies/search/${localStorageTerm}`)
        }
        else{
          movies = await axios.get('/movies/search/twilight')
        }
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
    setLoadspinner(true)
    setTimeout(()=>{
      getMovies()
      setLoadspinner(false)
    },2000)

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
        {loadSpinner ?
          <div className = {classes.loadingContainer}>
        <CircularProgress className = {classes.loading} />
        </div>
         :
        <Container className={classes.cardGrid} maxWidth="lg">
          <Grid container spacing={4}>
            {movies.map((movie) => (
              <MovieCard key = {movie.imdbID} movie = {movie}/>
            ))}
          </Grid>
        </Container>
          }
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Thank you for checking out this app!
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Here are some links to me and my work:
        </Typography>
        <div className  = {classes.iconContainer}>
          <a class='link' href='https://www.linkedin.com/in/johnt5301'>
            <img src={linkedinLogo} alt="github" height="30px" width="30px" />
          </a>
          <a class='link' href='https://github.com/jt5301'>
            <img src={githubLogo} alt="github" height="30px" width="30px" />
          </a>
        </div>

      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}

