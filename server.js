const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));     ////allows us to determine route
app.use(express.json());                             ///allows us to parse json

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
      app.use(express.static("client/build"));
    }
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
//mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks");
mongoose.connect(MONGODB_URI, { useNewUrlParser: true}, (err) => {
        if (err) throw err;
        console.log("Database error occurred")
        })
    .then(() => console.log("Database Connected Successfully!"))
    .catch(err => console.log(err));

const usersRouter = require('./routes/users');
const issueRouter = require('./routes/issue');

app.use('/users', usersRouter);
app.use('/issue', issueRouter);



// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
