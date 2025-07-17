CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  refresh_token TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

ALTER TABLE users
  ADD COLUMN subscription_plan TEXT,
  ADD COLUMN subscription_status TEXT DEFAULT 'inactive',
  ADD COLUMN subscription_start_date TIMESTAMP,
  ADD COLUMN subscription_end_date TIMESTAMP; 