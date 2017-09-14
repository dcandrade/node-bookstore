CREATE DATABASE bookstore_dev;
USE bookstore_dev;

CREATE TABLE products(
    id int(10) NOT NULL AUTO_INCREMENT,
    title varchar(255) DEFAULT NULL,
    description text,
    price decimal(10,2) DEFAULT NULL,
    PRIMARY KEY (id)
);

