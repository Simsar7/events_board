const express = require("express");
const router = express.Router();
const db = require("../db/db");
const admin = require("../middleware/admin");

/* LIST EVENTS (Admin Dashboard) */
router.get("/events", admin, async (req, res) => {
  const events = await db.query("SELECT * FROM events ORDER BY created_at DESC");
  const featured = await db.query("SELECT * FROM events WHERE featured=true");  // ✅ Add this line

  res.render("home", {
    events: events.rows,
    featured: featured.rows,  // ✅ Add this line
    user: req.session.user,
    role: req.session.user?.role
  });
});

/* NEW EVENT FORM */
router.get("/events/new", admin, (req, res) => {
  console.log("NEW EVENT ROUTE HIT - rendering with event: null");
  
  res.render("new-event", { 
    event: null,
    user: req.session.user,
    role: req.session.user?.role
  });
});

/* CREATE EVENT */
router.post("/events", admin, async (req, res) => {
  const { title, description, dates, location, image_url, featured } = req.body;

  await db.query(
    `INSERT INTO events (title, description, dates, location, image_url, featured)
     VALUES ($1,$2,$3,$4,$5,$6)`,
    [title, description, dates, location, image_url, featured === "true"]
  );

  res.redirect("/admin/events");
});

/* EDIT FORM */
router.get("/events/:id/edit", admin, async (req, res) => {
  const result = await db.query("SELECT * FROM events WHERE id=$1", [req.params.id]);
  
  if (result.rows.length === 0) {
    return res.status(404).send("Event not found");
  }
  
  res.render("new-event", { 
    event: result.rows[0],
    user: req.session.user,
    role: req.session.user?.role
  });
});

/* UPDATE EVENT */
router.post("/events/:id", admin, async (req, res) => {
  const { title, description, dates, location, image_url, featured } = req.body;

  await db.query(
    `UPDATE events SET
      title=$1, description=$2, dates=$3, location=$4, image_url=$5, featured=$6
     WHERE id=$7`,
    [title, description, dates, location, image_url, featured === "true", req.params.id]
  );

  res.redirect("/admin/events");
});

/* DELETE EVENT */
router.post("/events/:id/delete", admin, async (req, res) => {
  await db.query("DELETE FROM events WHERE id=$1", [req.params.id]);
  res.redirect("/admin/events");
});

module.exports = router;