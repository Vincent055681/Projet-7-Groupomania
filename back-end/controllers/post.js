const fs = require("fs");
const mysql = require("mysql");
// const db = require("../app")

// Create connexion
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "ssMRhrc68xVReAJtIxFg",
  database: "groupomania",
});

// Connect
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("MySQL Connected ...");
});

exports.createPost = (req, res, next) => {
    console.log(req.params);
  let post = {
    author: 'req.params.author',
    message: req.params.message,
    date_creation: req.params.date_creation,
  };
  let sql = "INSERT INTO posts SET ?";
  let query = db.query(sql, post, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("Post added...");
  });
};
