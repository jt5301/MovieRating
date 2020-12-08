const{
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLNonNull,
} = require('graphql')
const axios = require('axios')
const omdbRootUrl = `http://www.omdbapi.com/?apikey=${process.env.omdbKey}&`

const movieType = new GraphQLObjectType({
  name:'movie',
  description: 'movie',
  fields:()=>({
    Title:{type:GraphQLString},
    Year:{type:GraphQLString},
    ImdbID:{type:GraphQLString},
    Poster:{type:GraphQLString},
    Plot:{type:GraphQLString},
    Year:{type:GraphQLString},
    Director:{type:GraphQLString},
    Actors:{type:GraphQLString},
    Writer:{type:GraphQLString},
  })
})

//Root Query
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields:{
    movies:{
      type:new GraphQLList(movieType),
      args:{
        searchterm:{type:GraphQLString}
      },
      resolve: async (parent,args)=>{
        const res = await axios.get(omdbRootUrl+`s=${args}&type=movie`)
        let movies = res.data.Search
        for(let movie of movies){
          const res = await axios.get(omdbRootUrl+`i=${movie.imdbID}&plot=full`)
          const extraInfo = res.data
          movie.Plot = extraInfo.Plot
          movie.Actors = extraInfo.Actors
          movie.Director = extraInfo.Director
          movie.Writer = extraInfo.Writer
          movie.Year = extraInfo.Year
        }
        return movies
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query:RootQuery
})
