const dbc = require("../config/db");
const db = dbc.getDB();

// RUD users

exports.getOneUser = (req, res, next) => {
  console.log(req.params.id);
  const { id: userId } = req.params;
  const sqlGetEmail = `SELECT user_email FROM users WHERE users.user_id = ${userId};`;
  db.query(sqlGetEmail, (err, result) => {
    if (err) {
      res.status(404).json({ err });
      throw err;
    }
    if (result[0]) {
      res.status(200).json(result[0].user_email);
    }
  });
};
