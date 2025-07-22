CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  "firstName" TEXT NOT NULL,
  "lastName" TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  "passwordHash" TEXT NOT NULL,
  "refreshToken" TEXT,
  "createdAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "isActive" BOOLEAN DEFAULT TRUE
);






-- ALTER TABLE users
--   ADD COLUMN subscription_plan TEXT,
--   ADD COLUMN subscription_status TEXT DEFAULT 'inactive',
--   ADD COLUMN subscription_start_date TIMESTAMP,
--   ADD COLUMN subscription_end_date TIMESTAMP; 