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

create table merchant(
  id serial primary key,
  name text not null,
  "isActive" boolean default true,
  "createdAt" timestamp default current_timestamp,
  "updatedAt" timestamp default current_timestamp
)
alter table users add column "merchantId" integer 
add constraint fk_merchant_id
references merchant(id) 
on delete cascade;




-- ALTER TABLE users
--   ADD COLUMN subscription_plan TEXT,
--   ADD COLUMN subscription_status TEXT DEFAULT 'inactive',
--   ADD COLUMN subscription_start_date TIMESTAMP,
--   ADD COLUMN subscription_end_date TIMESTAMP; 