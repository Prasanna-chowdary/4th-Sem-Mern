const express = require("express");
const app = express();
const port = 3000;

// Basic Route
app.get("/", (req, res) => {
    res.send("Welcome to Express Routing");
});

// Route Parameter
app.get("/user/:id", (req, res) => {
    res.send("User ID: " + req.params.id);
});

// Query Parameter
app.get("/search", (req, res) => {
    res.send("Search Query: " + req.query.name);
});

// URL Building Example
app.get("/product/:category/:item", (req, res) => {
    const category = req.params.category;
    const item = req.params.item;
    res.send(`Category: ${category}, Item: ${item}`);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});