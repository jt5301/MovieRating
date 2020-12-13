const{
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
} = require('graphql')
const axios = require('axios')
const omdbRootUrl = `http://www.omdbapi.com/?apikey=${process.env.omdbKey}&`
const RatedMovie = require('./models/rated')

const movieType = new GraphQLObjectType({
  name:'movie',
  description: 'movie',
  fields:()=>({
    Title:{type:GraphQLString},
    Year:{type:GraphQLString},
    imdbID:{type:GraphQLString},
    Poster:{type:GraphQLString},
    Plot:{type:GraphQLString},
    Year:{type:GraphQLString},
    Director:{type:GraphQLString},
    Actors:{type:GraphQLString},
    Writer:{type:GraphQLString},
    ThumbsUp:{type:GraphQLInt},
    ThumbsDown:{type:GraphQLInt}
  })
})

//Root Query
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields:{
    movies:{//search for movies matching keywords
      type:new GraphQLList(movieType),
      args:{
        searchterm:{type:GraphQLString}
      },
      resolve: async (parent,args)=>{
        const res = await axios.get(omdbRootUrl+`s=${args.searchterm}&type=movie`)
        let movies = res.data.Search
        for(let movie of movies){
          const res = await axios.get(omdbRootUrl+`i=${movie.imdbID}&plot=full`)
          const rating = await RatedMovie.findOne({
            movieId:movie.imdbID
          })
          if(rating){
            movie.ThumbsUp = rating.thumbsUp
            movie.ThumbsDown = rating.thumbsDown
          }
          const extraInfo = res.data
          movie.Plot = extraInfo.Plot
          movie.Actors = extraInfo.Actors
          movie.Director = extraInfo.Director
          movie.Writer = extraInfo.Writer
        }
        return movies
      }
    },
    movie:{//search for single movie. may not use for now
      type:movieType,
      args:{
        imdbID:{type:GraphQLString}
      },
      resolve:async(parent,args)=>{
        const res = await axios.get(omdbRootUrl+`i=${args.imdbID}&plot=full`)
        return res.data
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query:RootQuery
})
