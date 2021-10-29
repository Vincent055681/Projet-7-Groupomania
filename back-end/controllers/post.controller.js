const dbc = require("../config/db");
const db = dbc.getDB();

// CRUD post

exports.createPost = (req, res, next) => {
  let { body, file } = req;
  if (!file) delete req.body.image;
  body = {
    ...body,
    likes: "",
  };
  const sqlInsert = "INSERT INTO posts SET ?";
  db.query(sqlInsert, body, (err, result) => {
    if (err) {
      res.status(404).json({ err });
      throw err;
    }
    // post_id will be equal to the post inserted, and will be reused to link the image at the correct post in the below query
    const post_id = result.insertId;
    if (file) {
      const sqlInsertImage = `INSERT INTO images (image_url, post_id) VALUES ("${file.filename}", ${post_id})`;
      db.query(sqlInsertImage, (err, result) => {
        if (err) {
          res.status(404).json({ err });
          throw err;
        }
        res.status(200).json({ msg: "added..." });
      });
    }
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

exports.getOneImage = (req, res, next) => {
  const { id: postId } = req.params;
  const sqlGetImage = `SELECT * FROM images WHERE images.post_id = ${postId};`;
  db.query(sqlGetImage, (err, result) => {
    if (err) {
      res.status(404).json({ err });
      throw err;
    }
    if (result[0]) {
      result[0].image_url = req.protocol + '://' + req.get('host') + '/images/' + result[0].image_url
    }
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
  const { userId, postId } = req.body;

  const sqlSelect = `SELECT * FROM likes WHERE likes.user_id = ${userId} AND likes.post_id = ${postId}`;
  db.query(sqlSelect, (err, result) => {
    if (err) {
      console.log(err);
      res.status(404).json({ err });
      throw err;
    }

    if (result.length === 0) {
      const sqlInsert = `INSERT INTO likes (user_id, post_id) VALUES (${userId}, ${postId})`;
      db.query(sqlInsert, (err, result) => {
        if (err) {
          console.log(err);
          res.status(404).json({ err });
          throw err;
        }
        res.status(200).json(result);
      });
    } else {
      const sqlDelete = `DELETE FROM likes WHERE likes.user_id = ${userId} AND likes.post_id = ${postId}`;
      db.query(sqlDelete, (err, result) => {
        if (err) {
          console.log(err);
          res.status(404).json(err);
          throw err;
        }
        res.status(200).json(result);
      });
    }
  });
};

exports.postLikedByUser = (req, res) => {
  const { userId, postId } = req.body;
  const sql = `SELECT post_id, user_id FROM likes WHERE user_id = ${userId} AND post_id = ${postId}`;
  db.query(sql, (err, result) => {
    if (err) {
      res.status(404).json({ err });
      throw err;
    }
    // console.log("result : " , result);
    res.status(200).json(result);
  });
};

exports.countLikes = (req, res) => {
  const { postId } = req.body;
  const sqlInsert = `SELECT COUNT(*) AS total FROM likes WHERE likes.post_id = ${postId}`;
  db.query(sqlInsert, (err, result) => {
    if (err) {
      res.status(404).json({ err });
      throw err;
    }
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
