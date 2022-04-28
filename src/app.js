const express = require("express");
const path = require("path");
const hbs = require("hbs");
const app = express();
const port = process.env.PORT || 3000;

// public static path
const static_path = path.join(__dirname, "../public");
const templates_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");

app.set("views engine", "hbs");
app.set("views", templates_path);
hbs.registerPartials(partials_path);

app.use(express.static(static_path));

// app.use(express.static());

// routing
app.get("/", (req, res) => {
  res.render("index.hbs");
});

app.get("/about", (req, res) => {
  res.render("about.hbs");
});

app.get("/weather", (req, res) => {
  // res.send("welcome to my weather  page...");

  res.render("weather.hbs");
});

app.get("*", (req, res) => {
  // res.send(" 404 error pg, ooppsss...");
  res.render("404error.hbs", {
    errorMsg: "Opps! Page Not Found",
  });
});

app.listen(port, () => {
  console.log(`listening to the port at ${port}`);
});
