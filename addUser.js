const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/myDB");

const User = mongoose.model("User", {
  name: String,
  email: String
});

app.post("/add", async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.send("User Added");
});

app.listen(5000, () => console.log("Server started"));
