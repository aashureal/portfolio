const express = require("express");
const app = express();

// Require Routers
const authRouter = require("./routes/auth.routes");
const projectRouter = require("./routes/project.routes");

// EJS Setup
app.set("view engine", "ejs");

// Routes
app.use("/auth", authRouter);
app.use("/projects", projectRouter);

// Home Page
app.get("/", (req, res) => {
  res.render("index");
});

app.listen(process.env.PORT || 3000);
