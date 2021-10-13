const dbc = require("../config/db");

// CRUD post

exports.createPost = (req, res, next) => {
  console.log(req.body);
  let { body } = req;
  body = {
    ...body,
    likes: "",
  };
  console.log(body);
  const db = dbc.getDB();
  const sql = "INSERT INTO posts SET ?";
  db.query(sql, body, (err, result) => {
    if (err) {
      res.status(404).json({ err });
      throw err;
    }
    console.log(res.body);
    res.status(200).json({ msg: "Post added..." });
  });
};

exports.getAllPosts = (req, res, next) => {
  const sql = "SELECT * FROM posts ORDER BY date_creation DESC;";
  const db = dbc.getDB();
  db.query(sql, (err, result) => {
    if (err) {
      res.status(404).json({ err });
      throw err;
    }
    // console.log(result);
    res.status(200).json(result);
  });
};

exports.updatePost = (req, res, next) => {
  // let sql = "SELECT * FROM posts ORDER BY date_creation DESC;";
  // let db = dbc.getDB();
  // db.query(sql, (err, result) => {
  //   if (err) {
  //     res.status(404).json({ err });
  //     throw err;
  //   }
  //   // console.log(result);
  //   res.status(200).json(result);
  // });
};

exports.deletePost = (req, res, next) => {
  const { postId } = req.body;
  const sql = `DELETE FROM posts WHERE id = ${postId}`;
  const db = dbc.getDB();
  // db.query(sql, (err, result) => {
  //   if (err) {
  //     res.status(404).json({ err });
  //     throw err;
  //   }
  //   // console.log(result);
  //   res.status(200).json(result);
  // });
};

// Like & unlike a post

exports.likeUnlikePost = (req, res) => {
  console.log(req.body);
  const { userId, postId } = req.body;

  const sql = `UPDATE posts SET likes=CONCAT("${userId},", likes) WHERE posts.id = ${postId}`;
  const db = dbc.getDB();
  db.query(sql, (err, result) => {
    if (err) {
      res.status(404).json({ err });
      throw err;
    }
    console.log(result);
    res.status(200).json(result);
  });
};

exports.countLikes = (req, res) => {
  const { postId } = req.body;
  const sql = `SELECT likes FROM posts WHERE posts.id = ${postId}`;
  const db = dbc.getDB();
  db.query(sql, (err, result) => {
    if (err) {
      res.status(404).json({ err });
      throw err;
    }
    console.log(result);
    res.status(200).json(result);
  });
};

// CRUD comments
exports.getAllComments = (req, res) => {
  console.log("reqbody", req.body);
  const { postId } = req.body;
  const sql = `SELECT * FROM comments WHERE comments.post_id = ${postId}`;
  const db = dbc.getDB();
  db.query(sql, (err, result) => {
    if (err) {
      res.status(404).json({ err });
      throw err;
    }
    console.log(result);
    res.status(200).json(result);
  });
};

exports.createComment = (req, res, next) => {
  console.log(req.body);
  const { message, post_id, author_id, author_firstname, author_lastname } = req.body;
  const sql =
    `INSERT INTO comments (id, post_id, author_id, author_firstname, author_lastname, message, created_at, updated_at, likes) VALUES (NULL, ${post_id}, ${author_id}, "${author_firstname}", "${author_lastname}", "${message}", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, '0')`;
  const db = dbc.getDB();
  db.query(sql, (err, result) => {
    if (err) {
      res.status(404).json({ err });
      console.log(err);
      throw err;
    }
    // console.log(result);
    res.status(200).json(result);
  });
};

// Like & unlike comments
