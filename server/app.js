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
  GraphQLString
} = require('graphql')

var app = express();
const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name:'helloworld',
    fields:()=>({
      message:{
        type:GraphQLString,
        resolve:()=>'helloWorld resolve'
      }
    })
  })
})
app.use(logger("dev"));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use("/movies", movieRouter);
app.use('/graphql',graphqlHTTP({
  graphiql:true,
  schema:schema
}))

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
