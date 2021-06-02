var express = require("express");
var router = express.Router();
var db = require("../db");

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log("Posts Middleware Time: ", Date.now());
  next();
});
// define the home page route
router.get("/", function(req, res) {
  db.Post.findAll().then(posts => {
    res.send(JSON.stringify({
      posts: posts
    }));
  })

});

module.exports = router;
