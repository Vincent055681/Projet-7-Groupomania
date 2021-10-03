const express = require("express");
const app = express();
const mysql = require("mysql");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");

app.use(helmet());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", `${process.env.CLIENT_URL}`);
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  res.setHeader(
    "Access-Control-Allow-Credentials", "true"
  );
  next();
});

app.use(express.json());
app.use(cookieParser());

const userRoutes = require("./routes/user");
const postRoutes = require("./routes/post");

app.use("/api/auth", userRoutes);
app.use("/api/post", postRoutes);

module.exports = app;
