const mysql = require("mysql")

// Create connexion
const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'ssMRhrc68xVReAJtIxFg',
    database : "groupomania"
  });
  
 module.exports.getDB = () => {
     return db
 }
