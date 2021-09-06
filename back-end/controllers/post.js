const fs = require("fs");
const mysql = require("mysql");
const dayjs = require("dayjs")
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
  console.log(req);
  const { body } = req
   let sql = "INSERT INTO posts SET ?";
  let query = db.query(sql, body, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("Post added...");
  });
};

exports.getAllPosts = (req, res, next) => {
  let sql = "SELECT * FROM posts;";
  let query = db.query(sql, (err, result) => {
    if (err) {
      res.status(404).json({ err });
      throw err;
    }
    console.log(result);
    res.status(200).json(result);
  });
};
