


create table roles (
    id serial primary key ,
    name varchar(100) UNIQUE not null
)


create table permissions (
    id serial primary key ,
    name varchar (100) UNIQUE not null
)

create table role_permissions(
    role_id int references  roles (id) on delete cascade,
    permission_id int references permissions(id) on delete cascade ,

    primary key (role_id,permission_id) -- composite key ensure each combination is unique (no duplicates)
)

create table user_role(
    user_id int references users(id ) on delete cascade ,
     role_id int references roles(id ) on delete cascade ,
     primary key (user_id,role_id) 
)

