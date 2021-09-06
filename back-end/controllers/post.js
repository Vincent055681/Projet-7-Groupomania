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
  // Vu que req.pody.post a exactement la même structure que celle attendue par la BDD SQL, je peux envoyer dans ma query directement le body.post sans avoir à destrcturer l'author, la date et le message depuis le res.body.post
  console.log(req.body);
  const { post } = req.body
   let sql = "INSERT INTO posts SET ?";
  let query = db.query(sql, post, (err, result) => {
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
