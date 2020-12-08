const createError = require("http-errors");
const express = require("express");
const { join } = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const mongoose = require('mongoose')
const movieRouter = require("./routes/movies");
const bodyParser = require('body-parser')
const { json, urlencoded } = express;
const {graphqlHTTP} = require('express-graphql')
const{
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLNonNull,
} = require('graphql')
const schema = require('./schema')

var app = express();


app.use('/graphql',graphqlHTTP({
  graphiql:true,
  schema
}))

app.use(logger("dev"));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use("/movies", movieRouter);

app.use(express.static(__dirname + '/client/build/'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

mongoose.connect(process.env.mongodbConnect, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
  console.log('connected to mongodb')
})

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500).send('error');
});

module.exports = app;


// const authors = [
// 	{ id: 1, name: 'J. K. Rowling' },
// 	{ id: 2, name: 'J. R. R. Tolkien' },
// 	{ id: 3, name: 'Brent Weeks' }
// ]

// const books = [
// 	{ id: 1, name: 'Harry Potter and the Chamber of Secrets', authorId: 1 },
// 	{ id: 2, name: 'Harry Potter and the Prisoner of Azkaban', authorId: 1 },
// 	{ id: 3, name: 'Harry Potter and the Goblet of Fire', authorId: 1 },
// 	{ id: 4, name: 'The Fellowship of the Ring', authorId: 2 },
// 	{ id: 5, name: 'The Two Towers', authorId: 2 },
// 	{ id: 6, name: 'The Return of the King', authorId: 2 },
// 	{ id: 7, name: 'The Way of Shadows', authorId: 3 },
// 	{ id: 8, name: 'Beyond the Shadows', authorId: 3 }
// ]

// const bookType = new GraphQLObjectType({
//   name:'Book',
//   description:'represents a book written by author',
//   fields:()=>({
//     id:{type: GraphQLNonNull(GraphQLInt)},
//     name:{type: GraphQLNonNull(GraphQLString)},
//     authorId:{type: GraphQLNonNull(GraphQLInt)},
//     author:{
//       type:AuthorType,
//       resolve:(book)=>{
//         return authors.find((author)=>{return author.id === book.authorId})
//       }
//     }
//   })
// })

// const AuthorType = new GraphQLObjectType({
//   name:'author',
//   description:'represents an author of a book',
//   fields:()=>({
//     id:{type: GraphQLNonNull(GraphQLInt)},
//     name:{type: GraphQLNonNull(GraphQLString)},
//     books:{
//       type:new GraphQLList(bookType),
//       resolve:(author)=>{
//         return books.filter((book)=>{
//           return book.authorId === author.id
//         })
//       }
//     }
//   })
// })

// const rootQueryType = new GraphQLObjectType({
//   name:'Query',
//   description:'Root Query',
//   fields:()=>({
//     book:{
//       type:bookType,
//       description:'A Single Book',
//       args:{
//         id:{
//           type:GraphQLInt
//         },
//       },
//       resolve:(parent, args)=>books.find((book)=>{
//         return args.id === book.id})
//     },
//     books:{
//       type:new GraphQLList(bookType),
//       description:'list of books',
//       resolve:()=>books
//     },
//     authors:{
//       type:new GraphQLList(AuthorType),
//       description:'list of Authors',
//       resolve:()=>authors
//     }
//   })//parentheses = return statement
// })

// const RootMutationType = new GraphQLObjectType({
//   name:'Mutation',
//   description:'Root Mutation',
//   fields:()=>({
//     addBook:{
//       type:bookType,
//       description:'Add book',
//       args:{
//         name:{type:GraphQLNonNull(GraphQLString)},
//         authorId:{type:GraphQLNonNull(GraphQLInt)}
//       },
//       resolve:(parent,args)=>{
//         const book ={
//           id:books.length+1,
//           name:args.name,
//           authorId:args.authorId
//         }
//         books.push(book)
//         return book
//       }
//     }
//   })
// })

// const schema = new GraphQLSchema({
//   query:rootQueryType,
//   mutation:RootMutationType
// })
// app.use('/graphql',graphqlHTTP({
//   graphiql:true,
//   schema:schema
// }))
