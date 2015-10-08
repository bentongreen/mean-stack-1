'use strict'

var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var Blog = require("./models/blog");

// Connect to the database
mongoose.connect("mongodb://localhost/blog", function (err) {
  if (err) {
    console.log('connection error', err);
  } else {
    console.log('connection successful');
  }
});

var app = express();
var port = process.env.PORT || 3000;

// Create the Express router
var router = express.Router();

// Use the body-parser package in our application
app.use(bodyParser.json);

// app.use(express.static(__dirname + '/public'));

// app.get('/', function (req, res, next) {
//     console.log('request was made...');
//     console.log(req.originalUrl);
//     next();
// });

app.get('/', function(req, res) {
    res.sendFile('index.html', { root: __dirname + '/' });
});

// configure ilvereload
app.use(require('connect-livereload')({port: 8080}));

// // Dummy route
router.get("/", function (req, res) {
  res.sendFile(__dirname + "/src/app/index.html");
});

router.get("/assets/*", function (req, res) {
  path = req.path.replace(/^\/assets/,'');
  if (path.match(/node_modules/)) {
    res.sendFile(__dirname + path);
  } else {
    res.sendFile(__dirname + "/public/" + path);
  }
});

// Register all our routes with /api
app.use("/api", apiRouter);
app.use("/", baseRouter);

// Create a new route with prefix /blogs

var blogsRoute = apiRouter.route("/blogs");

// READ
// Create endpoint /api/players for POST

blogsRoute.post(function (req, res) {
  // New instance of the Blog model
  var blog = new Blog();

  // Set the blog properties that came from the Post data
  blog.title = req.body.title;
  blog.content = req.body.content;
  blog.author = req.body.author;
  blog.date = req.body.date;
  blog.comments = req.body.comments;

  // Save the blog and check for errors
  blog.save(function(err) {
    if (err) {
      res.send(err);
    }

    res.json({ message: "Player successfully save.", data: player });
  });
});

// Create
// Create a new route for /blogs/:blog_id
var blogRoute = apiRouter.route("/blogs/:blog_id");

// Create endpoint for /api/blogs/:blogID
blogRoute.get(function(req, res) {
  Blog.findbyId(req.params.blog_id, function (err, blog) {
    if (err) {
      res.send(err);
    }
    res.json(blog);
  });
});

// Update
// Change the blog
blogRoute.put(function(req, res) {
  // Use the Blog model to find a specific blog
  Blog.findbyId(req.params.blog_id, function (err, player) {
    if (err) {
      res.send(err);
    }
    blog.title = req.body.title;
    blog.content = req.body.content;
    blog.author = req.body.author;
    blog.date = req.body.date;
    blog.comments = req.body.comments;

    // Save the player and check for errors
    blog.save(function (err) {
      if (err) {
        res.send(err);
      }

      res.json(blog);
    });
  });
});

// Delete
// Create endpoint /api/blogs/:blod_id for Delete

blogRoute.delete(function (req, res) {
  Player.findByIdAndRemove(req.params.blog_id, function (err) {
    if (err) {
      res.send(err)
    }
    res.json({ message: "Successfully removed blog." });
  });
});

app.use(require("connect-livereload"));
app.listen(port);
console.log('server listening at port:' + port);
