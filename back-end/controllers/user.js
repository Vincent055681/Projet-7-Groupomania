const mysql = require("mysql");
// const db = require("../app")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

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
  const { user_password: password } = req.body;
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

exports.login = (req, res, next) => {
  //===== Check if user exists in DB ======
  const { user_email, user_password: clearPassword } = req.body;
  let sql = `SELECT user_password, user_id FROM users WHERE user_email=?`;
  db.query(sql, [user_email], async (err, results) => {
    console.log(results);
    console.log(req.body);
    if (err) {
      return res.status(404).json({ err });
    }

    // ===== Verify password with hash in DB ======
    const { user_password: hashedPassword, user_id } = results[0];
    try {
      const match = await bcrypt.compare(clearPassword, hashedPassword);
      if (match) {
        // If match, generate JWT token  ( Ce code n'est pas exécuté, l'execution du code saute cette étape pour aller dans la fonction sendToken)
        console.log("match ... user_id : ", user_id);
        res.status(200).json({
          test: "iyu",
          user_id: user_id,
          token: jwt.sign({ userId: user_id }, "TOOOKEN", {
            expiresIn: "24h",
          }),
        });
      } else {
        console.log("not match");
      }
    } catch (err) {
      return res.status(400).json({ err: "une erreur" });
    }
  });
};

exports.sendToken = (req, res, next) => {
  res.status(200).json({ test: "pjo" });
};
