create table lark_block(
id int not null primary key AUTO_INCREMENT,
name varchar(200),
comment varchar(500),
state int default 1,
type int not null default 1,
creation_date datetime
);