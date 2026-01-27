const express = require("express");
const session = require("express-session");
const path = require("path");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.use(
  session({
    secret: "events-secret",
    resave: false,
    saveUninitialized: false,
  })
);

app.use((req, res, next) => {
  console.log("Session user:", req.session.user);
  res.locals.user = req.session.user || null;
  res.locals.role = req.session.user?.role || null;
  next();
});

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use("/", require("./routes/auth.routes"));     // login first
app.use("/", require("./routes/events.routes"));
app.use("/admin", require("./routes/admin.routes"));

app.listen(3000, () => {
  console.log("http://localhost:3000");
});