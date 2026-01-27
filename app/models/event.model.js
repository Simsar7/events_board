const db = require("../db/db");

exports.getAll = async () =>
  (await db.query("SELECT * FROM events ORDER BY created_at ASC")).rows;

exports.getFeatured = async () =>
  (await db.query("SELECT * FROM events WHERE featured=true")).rows;

exports.getById = async (id) =>
  (await db.query("SELECT * FROM events WHERE id=$1", [id])).rows[0];

exports.create = async (e) => {
  const { title, description, location, image_url, dates, featured } = e;
  await db.query(
    `INSERT INTO events(title,description,location,image_url,dates,featured)
     VALUES($1,$2,$3,$4,$5,$6)`,
    [title, description, location, image_url, dates, featured]
  );
};