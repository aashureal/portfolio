const express = require("express");
const app = express();

// EJS Setup
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.send("Hey");
});

app.listen(process.env.PORT || 3000);
