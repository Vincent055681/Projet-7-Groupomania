const dbc = require("../config/db");
const db = dbc.getDB();

// RUD users

exports.getOneUser = (req, res, next) => {
    console.log(req.params.id);
   }