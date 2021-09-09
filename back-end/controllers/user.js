const mysql = require("mysql");
// const db = require("../app")

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

exports.signUp = (req, res, next) => {
  console.log("okiiii");
  const { body } = req;
  const sql = "INSERT INTO users SET ?";
  const query = db.query(sql, body, (err, result) => {
    if (err) throw err;
    console.log("REPONSE : ", result);
  });
};
