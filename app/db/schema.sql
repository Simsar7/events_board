-- =========================================
-- FULL DATABASE INIT FILE
-- (ADMIN + EVENTS)
-- =========================================

-- =========================================
-- USERS TABLE (ADMIN)
-- =========================================
DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password TEXT NOT NULL,
  role VARCHAR(50) DEFAULT 'user',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert admin user
INSERT INTO users (id, email, password, role) VALUES
(
  6,
  'admin@test.com',
  '$2b$10$AM/y5u7LKJADRvP16YFv0OQe2ZDUimysQGgRRZePXFxyrgA/BUKuu',
  'admin'
);

-- =========================================
-- EVENTS TABLE
-- =========================================
DROP TABLE IF EXISTS events CASCADE;

CREATE TABLE events (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  location VARCHAR(150),
  image_url TEXT,
  dates DATE NOT NULL,
  featured BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert events
INSERT INTO events (title, description, location, image_url, dates, featured) VALUES
(
  'Tech Innovation Summit 2026',
  'A summit focusing on AI, Cloud, and Future Technologies with top industry speakers.',
  'Dubai, UAE',
  'https://images.unsplash.com/photo-1519389950473-47ba0277781c',
  '2026-02-15',
  true
),
(
  'Startup Networking Meetup',
  'Meet founders, investors, and developers to grow your startup network.',
  'Abu Dhabi, UAE',
  'https://images.unsplash.com/photo-1556761175-5973dc0f32e7',
  '2026-03-05',
  false
),
(
  'Web Development Bootcamp',
  'Hands-on bootcamp covering HTML, CSS, JavaScript, React, and Node.js.',
  'Sharjah, UAE',
  'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
  '2026-03-20',
  true
),
(
  'AI & Machine Learning Workshop',
  'Learn AI and ML concepts with real-world projects and case studies.',
  'Dubai, UAE',
  'https://images.unsplash.com/photo-1555949963-aa79dcee981c',
  '2026-04-10',
  true
),
(
  'Cyber Security Awareness Seminar',
  'Understand cyber threats, protection techniques, and best security practices.',
  'Ajman, UAE',
  'https://images.unsplash.com/photo-1550751827-4bd374c3f58b',
  '2026-04-25',
  false
);