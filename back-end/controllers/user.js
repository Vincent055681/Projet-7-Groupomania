const mysql = require("mysql");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const dbc = require("../config/db");

exports.signup = async (req, res, next) => {
  try {
    const { user_password: password } = req.body;

    // ====== Password encryption =========
    const salt = await bcrypt.genSalt(10);
    const encryptedPassword = await bcrypt.hash(password, salt);

    const user = {
      ...req.body,
      user_password: encryptedPassword,
    };
    const sql = "INSERT INTO users SET ?";
    let db = dbc.getDB();
    const query = db.query(sql, user, (err, result) => {
      console.log(result);
      if (!result) {
        res.status(200).json({ message: "Email déjà enregistré" });

      } else {
        res.status(201).json({ message: "User created !" });
      }
    });
  } catch (err) {
    res.status(200).json({ message: "Failed registration", err });
  }
};

exports.login = (req, res, next) => {
  //===== Check if user exists in DB ======
  const { user_email, user_password: clearPassword } = req.body;
  let sql = `SELECT user_password, user_id FROM users WHERE user_email=?`;
  let db = dbc.getDB();
  db.query(sql, [user_email], async (err, results) => {
    console.log(req.body);
    console.log(results);
    if (err) {
      return res.status(404).json({ err });
    }

    // ===== Verify password with hash in DB ======
    const { user_password: hashedPassword, user_id } = results[0];
    try {
      const match = await bcrypt.compare(clearPassword, hashedPassword);
      if (match) {
        // If match, generate JWT token
        console.log("match ... user_id : ", user_id);
        res.status(200).json({
          user_id: user_id,
          token: jwt.sign({ userId: user_id }, process.env.JWT_TOKEN, {
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
