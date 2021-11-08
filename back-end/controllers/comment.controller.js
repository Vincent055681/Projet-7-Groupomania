const dbc = require("../config/db");
const db = dbc.getDB();

// CRUD comments

exports.deleteOneComment = (req, res) => {
  const comment_id = req.params.id
  const sql = `DELETE FROM comments WHERE comments.id = ${comment_id}`;
  db.query(sql, (err, result) => {
    if (err) {
      res.status(404).json({ err });
      throw err;
    }
    res.status(200).json(result);
  });
};

exports.getOneComment = (req, res) => {
  const commentId = req.params.id
  const sql = `SELECT * FROM comments WHERE comments.id = ${commentId}`;
  db.query(sql, (err, result) => {
    if (err) {
      res.status(404).json({ err });
      throw err;
    }
    res.status(200).json(result);
  });
};

exports.getAllComments = (req, res) => {
    const postId = req.params.id
    const sql = `SELECT * FROM comments WHERE comments.post_id = ${postId}`;
    db.query(sql, (err, result) => {
      if (err) {
        res.status(404).json({ err });
        throw err;
      }
      res.status(200).json(result);
    });
  };
  
  exports.createComment = (req, res, next) => {
    const { message, post_id, author_id, author_firstname, author_lastname } =
      req.body;
    const sql = `INSERT INTO comments (id, post_id, author_id, author_firstname, author_lastname, message, created_at, updated_at, likes) VALUES (NULL, ${post_id}, ${author_id}, "${author_firstname}", "${author_lastname}", "${message}", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, '0')`;
    db.query(sql, (err, result) => {
      if (err) {
        res.status(404).json({ err });
        console.log(err);
        throw err;
      }
      res.status(200).json(result);
    });
  };