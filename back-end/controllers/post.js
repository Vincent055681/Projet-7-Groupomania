const fs = require("fs");
const mysql = require("mysql");
const dayjs = require("dayjs");

exports.createPost = (req, res, next) => {
  const { body } = req;
  console.log(body);
  let sql = "INSERT INTO posts SET ?";
  let query = db.query(sql, body, (err, result) => {
    if (err) {
      res.status(404).json({ err });
      throw err
    }
    console.log(res.body);
    res.status(200).json({msg: "Post added..."});
  });
};

exports.getAllPosts = (req, res, next) => {
  let sql = "SELECT * FROM posts ORDER BY date_creation DESC;";
  let query = db.query(sql, (err, result) => {
    if (err) {
      res.status(404).json({ err });
      throw err;
    }
    // console.log(result);
    res.status(200).json(result);
  });
};
