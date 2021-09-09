const mysql = require("mysql");
// const db = require("../app")
const bcrypt = require("bcrypt");

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

exports.signup = async (req, res, next) => {
  // ====== Password encryption =========
  const saltRounds = 10;
  const { user_password:password } = req.body;
  const encryptedPassword = await bcrypt.hash(password, saltRounds);
  // ====================================
  const user = {
    ...req.body,
    user_password: encryptedPassword,
  };
  const sql = "INSERT INTO users SET ?";
  const query = db.query(sql, user, (err, result) => {
    if (err) throw err;
    console.log(result);
  });
};

exports.login =  (req, res, next) => {
   const { user_email } = req.body
   let sql = `SELECT user_email FROM users WHERE user_email=${user_email};`;
   let query = db.query(sql, (err, result) => {
     if (err) {
       res.status(404).json({ err });
       throw err;
     }
     console.log(result);
     res.status(200).json(result);
   })
  };
  