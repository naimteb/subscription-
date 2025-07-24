

insert into roles (name) values   ('admin'), ('merchant'),('user')



insert into permissions (name) values ('createPlan'), ('subscribe'),('cancelSubscription')


-- Admin gets all permissions
insert into role_permissions (role_id, permission_id)
select r.id, p.id from roles r, permissions p where r.name = 'admin';

-- Merchant gets 'createPlan'
insert into role_permissions (role_id, permission_id)
select r.id, p.id from roles r, permissions p 
where r.name = 'merchant' and p.name = 'createPlan';

-- User gets 'subscribe' and 'cancelSubscription'
insert into role_permissions (role_id, permission_id)
select r.id, p.id from roles r, permissions p 
where r.name = 'user' and p.name in ('subscribe', 'cancelSubscription');




insert into user_role(user_id,role_id)
select 1,id from roles where name='admin';


--user → role(s) → permission(s)
--Uses joins instead of subqueries for performance and clarity

select p.name as permission from users u join
user_role ur on u.id=ur.role_id  join --this joins user to a role 
role_permissions rp on ur.role_id=rp.role_id join -- this join role to a permission 
permissions p on rp.permission_id=p.id -- this join to the actual permissions 
where u.id=1





--result of above query  :
-- create_plan
-- subscribe
-- view_dashboard



