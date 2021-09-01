const express = require("express");
const helmet = require("helmet");
const bodyParser = require('body-parser'); 

const app = express();

app.use(helmet());

app.post("/", (req, res, next) => {
    res.json({ publications: "toutes les publis" });
    next();
  });
  
module.exports = app;
