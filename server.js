const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors()); // Allow all origins by default
app.use(express.json());

// Your routes here
app.get("/", (req, res) => {
  res.send("Hello World");
});

module.exports = app;
