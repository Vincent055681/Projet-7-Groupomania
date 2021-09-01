const express = require("express");
const mysql = require('mysql')
const helmet = require("helmet");
const bodyParser = require('body-parser'); 

// Create connexion
const db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'ssMRhrc68xVReAJtIxFg',
  database : 'foodly'
});

// Connect
db.connect((err, result) => {
  if(err) {
    throw err;
  }
  console.log("MySql Connected !");
})


const app = express();

app.use(helmet());

app.post("/", (req, res, next) => {
    res.json({ publications: "toutes les publis" });
    next();
  });
  
module.exports = app;
