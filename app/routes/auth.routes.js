const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const db = require("../db/db");

router.get("/login", (req, res) => res.render("login"));

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const u = await db.query("SELECT * FROM users WHERE email=$1", [email]);
  if (!u.rows.length) return res.send("Invalid");

  const ok = await bcrypt.compare(password, u.rows[0].password);
  if (!ok) return res.send("Invalid");


  req.session.user = {
    id: u.rows[0].id,
    email: u.rows[0].email,
    role: u.rows[0].role

  };

  res.redirect("/");
});

router.get("/logout", (req, res) => {
  req.session.destroy(() => res.redirect("/"));
});

module.exports = router;