// Create connexion
const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'ssMRhrc68xVReAJtIxFg',
    database : "groupomania"
  });
  
  // Connect
  db.connect((err) => {
    if(err) {
      throw err;
    }
    console.log("MySQL Connected (config) ...");
  })

