# Year One Movie Rating

Hello! This is my submission for YearOne's application process. The app is made with React, Material-UI, Node, Express and MongoDB.

## Getting started

Download / clone the project. You'll need to create an env file storing two variables. Place your env file in the server folder:

One is a key to OMDB's api. You can find information on obtaining one [here](http://www.omdbapi.com/).

The other is a connection string for a MongoDB cluster. I found their docs pretty easy to follow for setting up in Node
[here](https://docs.atlas.mongodb.com/getting-started/).

The variable names are:

mongodbConnect= "your connection string here"

omdbKey= "your omdb key here"

Once you added the env variables, open up two terminals. Use one to cd into the server folder, npm install and start it. Use the other to cd into the client folder, npm install and start that. You should be able to see the frontend at localhost 3000 afterwards.

## The App

There's three main sections of the app.

One is the search bar above. This is pretty self-explanatory! Enter in some key words to find a movie (The main page when you start the app is focused on Twilight. Feel free to search for other movies.)

Two is the main display for all the movies. Here you can give a thumbs up or thumbs down to a movie. Once a movie gets a rating, it gets added to your mongoDB collection. You can only vote once (you can also take back a thumbs up and give a thumbs down instead, but you can't do both). Since this is a prototype, you can get around this by refreshing the page and voting again. A next step would be to add user login functionality, so that every user can be tracked regarding voting on a movie once.

The third section is the more info overlay. You can find more details about the movie here, including writers, cast, year of release, a larger poster, etc., as well as go to their dedicated imdb page (you'll be redirected to the movie when you return to the page).

![movierating demo](http://g.recordit.co/hA9ZqISh6D.gif)

I also added a loading animation to give the app some time to grab the numbers for the thumbs up and thumbs down, so that the user doesn't see the counters go from 0 to whatever number exists for the movie in the database.

Thank you for checking this out!
