const dbc = require("../config/db");
const db = dbc.getDB();

// const path = require("path");
// const multer = require("multer");
// const storage = multer.diskStorage({
//   destination: (req, file, callback) => {
//     callback(null, "../images");
//   },
//   filename: (req, file, callback) => {
//     console.log(file);
//     callback(null, Date.now() + path.extname(file.originalname));
//   },
// });

// const upload = multer({ storage: storage });

// CRUD post

exports.createPost = (req, res, next) => {
  console.log(req.body);
  console.log(req.body);
  let { body } = req;
  body = {
    ...body,
    likes: "",
  };
  // console.log(body);
  const sql = "INSERT INTO posts SET ?";
  db.query(sql, body, (err, result) => {
    if (err) {
      res.status(404).json({ err });
      throw err;
    }
    // console.log(res.body);
    res.status(200).json({ msg: "Post added..." });
  });
};

exports.getAllPosts = (req, res, next) => {
  const sql = "SELECT * FROM posts ORDER BY date_creation DESC;";
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
  // const { postId } = req.body;
  // const sql = `DELETE FROM posts WHERE id = ${postId}`;
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
  let currentResult = [];
  const { userId, postId } = req.body;

  const sqlSelect = `SELECT * FROM likes WHERE likes.user_id = ${userId} AND likes.post_id = ${postId}`;
  db.query(sqlSelect, (err, result) => {
    if (err) {
      console.log(err);
      res.status(404).json({ err });
      throw err;
    }
    console.log("result : ", result);
    currentResult = result;
    console.log("currentResult : ", currentResult);
  });

  console.log(currentResult.length);

  if (currentResult.length == 0) {
    const sqlInsert = `INSERT INTO likes (user_id, post_id) VALUES (${userId}, ${postId})`;
    console.log(sqlInsert);
    db.query(sqlInsert, (err, result) => {
      if (err) {
        console.log(err);
        res.status(404).json({ err });
        throw err;
      }
      // currentResult = []
      console.log("ok");
      res.status(200).json("ok");
    });
  } else {
    const sqlDelete = `DELETE FROM likes WHERE likes.user_id = ${userId} AND likes.post_id = ${postId}`;
    console.log(sqlDelete);
    db.query(sqlDelete, (err, result) => {
      if (err) {
        console.log(err);
        res.status(404).json({ err });
        throw err;
      }
      console.log("deleted");
      res.status(200).json("ok");
    });
  }
};

//res.status(200).json(result);

//   const sql = `INSERT INTO likes (post_id, user_id) VALUES (${postId}, ${userId})`;
// //  const sql = `UPDATE posts SET likes = ${(`likes` == userId ? "0 : userId)} WHERE posts.id = ${postId}`
// db.query(sql, (err, result) => {
//   if (err) {
//     console.log(err);
//     res.status(404).json({ err });
//     throw err;
//   }
//   // console.log(result);
//   res.status(200).json(result);
// });

exports.postLikedByUser = (req, res) => {
  //console.log(req.body);
  const { userId, postId } = req.body;
  const sql = `SELECT likes FROM posts WHERE likes = ${userId} AND posts.id = ${postId}`;
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
  db.query(sql, (err, result) => {
    if (err) {
      res.status(404).json({ err });
      throw err;
    }
    // console.log(result);
    res.status(200).json(result);
  });
};

// CRUD comments
exports.getAllComments = (req, res) => {
  // console.log("reqbody", req.body);
  const { postId } = req.body;
  const sql = `SELECT * FROM comments WHERE comments.post_id = ${postId}`;
  db.query(sql, (err, result) => {
    if (err) {
      res.status(404).json({ err });
      throw err;
    }
    // console.log(result);
    res.status(200).json(result);
  });
};

exports.createComment = (req, res, next) => {
  // console.log(req.body);
  const { message, post_id, author_id, author_firstname, author_lastname } =
    req.body;
  const sql = `INSERT INTO comments (id, post_id, author_id, author_firstname, author_lastname, message, created_at, updated_at, likes) VALUES (NULL, ${post_id}, ${author_id}, "${author_firstname}", "${author_lastname}", "${message}", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, '0')`;
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
