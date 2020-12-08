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
    Poster:{type:GraphQLString}
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
        let movies = await axios.get(omdbRootUrl+`s=${args}&type=movie`)
        console.log(movies.data.Search)
        return movies.data.Search
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query:RootQuery
})
