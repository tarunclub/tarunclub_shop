require("dotenv").config();

const mongoose = require("mongoose");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;

mongoose
  .connect(process.env.DATABASE)
  .then(() => {
    console.log("Database Connected");
  })
  .catch((err) => {
    console.log(error);
  });

app.get("/", (req, res) => {
  res.send("Hello Tarun");
});

app.listen(PORT, () => {
  console.log(`Server is running on localhost:${PORT}`);
});
