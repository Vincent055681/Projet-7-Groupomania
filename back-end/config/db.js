const mysql = require("mysql")

// Create connexion
// i don't use .env because its my openclassrooms project so it's not sensible data. In real project, i will use .env and put it in .gitignore
const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'ssMRhrc68xVReAJtIxFg',
    database : "groupomania"
  });
  
 module.exports.getDB = () => {
     return db
 }
