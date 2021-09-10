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
  function checkUser() {
    const { user_email, user_password: clearPassword } = req.body;
    let sql = `SELECT user_password FROM users WHERE user_email=${user_email}`;
    db.query(sql, async (err, result) => {
      if (err) {
        res.status(404).json({ err });
        // throw err;
      }
      // const result1 = Object.values(JSON.parse(JSON.stringify(result)));
      const hashedPassword = result[0].user_password;
      try {
        const match = await bcrypt.compare(clearPassword, hashedPassword);
      } catch (error) {
        console.log(error);
      }
      if (match) {
        console.log("match :)");
      } else {
        console.log("not match :(");
      }
    });
  }
  checkUser();
};
