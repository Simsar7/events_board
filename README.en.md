# Ingenious Backend Test – Event Board Application

## Overview

This project is a simple **Event Board web application** developed as part of the Ingenious Softworks backend test.

The app allows visitors to view and share events, and authenticated users (admin) to manage events via a backend dashboard.

It follows exactly the **user stories and constraints** described in the provided instructions, focusing on clean backend logic, authentication, and usable views.

---

## Tech Stack

* **Node.js** (Express)
* **PostgreSQL** (events & users)
* **EJS** templates (views)
* **bcrypt** (password hashing)
* **express-session** (authentication)

No full frameworks were used (only libraries), as requested.

---

## Features Implemented (User Stories)

### ✅ List events

* Homepage lists all events
* Events are sorted by date

### ✅ List featured events

* Featured events are shown on the right side of homepage

### ✅ Event detail page

* Clicking an event opens a detail page
* Shows title, description, date, location, image

### ✅ Share event

* Share button posts to Twitter
* Text format:

  > I will attend to [Event Name] @ [Event Date]

### ✅ Login

* Admin can log in
* Session-based authentication

### ✅ Backend event list (admin)

* Admin can see the same event list
* Pagination supported

### ✅ Create event (admin)

Admin can create events with:

* Title
* Description
* Date
* Location
* Image URL
* Featured flag

---

## Project Structure

```
.
app/
├── server.js            
├── db/
│   ├── db.js             
│   └── init.sql           
├── middleware/
│   ├── auth.js           
│   └── admin.js           
├── models/
│   └── event.model.js     
├── routes/
│   ├── auth.routes.js
│   ├── events.routes.js
│   └── admin.routes.js
├── views/
│   ├── home.ejs
│   ├── event-detail.ejs
│   ├── login.ejs
│   └── new-event.ejs
├── public/
└── README.md             
```

---

## Database Setup

### 1. Create database

```bash
createdb events_app
```

### 2. Run init script (tables + seed data)

```bash
psql -U your_user -d events_app -f db/init.sql
```

This will create:

* `users` table (with admin user)
* `events` table (with sample events)

---

## Admin Login Credentials

```
Email: admin@test.com
Password: admin123
```

---

## Run the Application

```bash
npm install
npm start
```

App will run at:

```
http://localhost:3000
```

---

## Notes / Assumptions

* Only one admin role is required for this test
* Image upload is handled via URL (as requested)
* UI is intentionally simple to focus on backend logic
* Pagination is implemented server-side

---



