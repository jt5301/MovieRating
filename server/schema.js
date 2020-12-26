const{
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLNonNull
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

//Root Mutation
const RootMutation = new GraphQLObjectType({
  name:'RootMutationType',
  description:'root mutation',
  fields:{//may need anon function
    addMovie:{
      type:movieType,
      description:'add movie to db',
      args:{
        imdbID:{type:GraphQLNonNull(GraphQLString)},
        ThumbsUp:{type:GraphQLNonNull(GraphQLInt)},
        ThumbsDown:{type:GraphQLNonNull(GraphQLInt)}
      },
      resolve:async(parent,args)=>{
        const movie = new RatedMovie({
          movieId:args.imdbID,//update here
          ThumbsUp:args.ThumbsUp,//update here
          ThumbsDown:args.ThumbsDown//update here
        })
        try {
          await movie.save()
          return movie
        } catch (error) {
          console.error(error)
        }
      }
    },
    modifyRating:{
      type:movieType,
      description:'modifies thumbs up',
      args:{
        imdbID:{type:GraphQLNonNull(GraphQLString)},
        ThumbsUp:{type:GraphQLNonNull(GraphQLInt)},
        ThumbsDown:{type:GraphQLNonNull(GraphQLInt)}
      },
      resolve: async (parent,args)=>{
        try {
          const updateRating = {
            $set:{
              thumbsUp:args.ThumbsUp,
              thumbsDown:args.ThumbsDown
            }
          }
          let test = await RatedMovie.findOneAndUpdate({
            movieId:args.imdbID
          },updateRating)
          return test
        } catch (error) {
          console.error(error)
        }
      }
    }
  }
})

//Root Query
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  description:'root query',
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
  query:RootQuery,
  mutation:RootMutation
})
