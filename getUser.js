const express = require("express");
const mongoose = require("mongoose");
const app = express();

mongoose.connect("mongodb://127.0.0.1:27017/myDB");

const User = mongoose.model("User", {
  name: String,
  email: String
});

app.get("/users", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

app.listen(5000);
