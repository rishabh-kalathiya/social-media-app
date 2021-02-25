const express = require("express");
const bodyParser = require("body-parser");

app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, DELETE, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Origin, Access,X-Requested-With, Content-Type");
  next();
});

app.post("/api/posts", (req, res, next) => {
  const post = req.body;
  console.log(post);
  res.status(201).json({
    message: "post added successfully!",
  });
});

app.get("/api/posts", (req, res, next) => {
  const posts = [
    {
      id: "sdfweq425d",
      title: "The first post",
      content: "This is from server",
    },
    {
      id: "df654ihtrfde",
      title: "The second post",
      content: "This is from server",
    },
  ];
  res.status(200).json({
    message: "Posts fetched successfully!",
    posts: posts,
  });
});

module.exports = app;
