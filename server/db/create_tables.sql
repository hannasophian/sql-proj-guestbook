DROP TABLE IF EXISTS signatures;
CREATE TABLE signatures (
    id serial primary key,
    signature text not null,
    message text,
    time timestamp not null default now()
);