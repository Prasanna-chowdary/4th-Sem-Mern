const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json()); // to read JSON data

// 1️⃣ Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/mydb")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// 2️⃣ Create Schema
const studentSchema = new mongoose.Schema({
    name: String,
    age: Number
});

// 3️⃣ Create Model
const Student = mongoose.model("Student", studentSchema);

// ================= CRUD =================

// CREATE
app.post("/add", async (req, res) => {
    const student = new Student(req.body);
    await student.save();
    res.send("Student Added");
});

// READ
app.get("/students", async (req, res) => {
    const data = await Student.find();
    res.json(data);
});

// UPDATE
app.put("/update/:id", async (req, res) => {
    await Student.findByIdAndUpdate(req.params.id, req.body);
    res.send("Student Updated");
});

// DELETE
app.delete("/delete/:id", async (req, res) => {
    await Student.findByIdAndDelete(req.params.id);
    res.send("Student Deleted");
});

// Server
app.listen(3000, () => {
    console.log("Server running on port 3000");
});