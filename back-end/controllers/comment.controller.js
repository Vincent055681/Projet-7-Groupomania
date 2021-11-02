const dbc = require("../config/db");
const db = dbc.getDB();

// CRUD comments
exports.getAllComments = (req, res) => {
    console.log(req.params);
    const postId = req.params.id
    console.log('postId :', postId);
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