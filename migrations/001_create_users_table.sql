CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  passwordHash TEXT NOT NULL,
  refreshToken TEXT,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  isActive BOOLEAN DEFAULT TRUE
);

alter TABLE users rename column name to username;
alter TABLE users add column lastname TEXT NOT NULL;


-- ALTER TABLE users
--   ADD COLUMN subscription_plan TEXT,
--   ADD COLUMN subscription_status TEXT DEFAULT 'inactive',
--   ADD COLUMN subscription_start_date TIMESTAMP,
--   ADD COLUMN subscription_end_date TIMESTAMP; 