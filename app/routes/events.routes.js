const express = require("express");
const router = express.Router();
const Event = require("../models/event.model");

router.get("/", async (req, res) => {
  const events = await Event.getAll();
  const featured = await Event.getFeatured();

  console.log("SESSION:", req.session.user); // 🧪 debug

  res.render("home", {
    events,
    featured,
    user: req.session.user || null,
    role: req.session.user?.role || null   
  });
});

router.get("/events/:id", async (req, res) => {
  res.render("event-detail", {
    event: await Event.getById(req.params.id),
    user: req.session.user || null,
    role: req.session.user?.role || null
  });
});

module.exports = router;