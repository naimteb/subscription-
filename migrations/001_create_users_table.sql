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




create table subscription(
  id serial primary key,
  "merchantId" integer add constraint fk_merchant_id-- the merchant offers a plan 
references merchant(id) 
on delete cascade,
 "planName" varchar(50) not null,
 price decimal(10,2) not null,
  "createdAt" timestamp default current_timestamp,

)

create table subscription_record(
  id serial primary key,
  "subscriptionId" integer add constraint fk_subscription_id
references subscription(id)-- wich plan  to subscribe
on delete cascade,
  "subscriberType" varchar(10) check ("subscriberType" in ('user', 'merchant')) not null,-- who is subscribing 
  "subscriberId" integer not null,
  "createdAt" timestamp default current_timestamp,
  "updatedAt" timestamp default current_timestamp,
  "expiresAt" timestamp not null,
  "canceledAt" timestamp,)


