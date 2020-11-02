
DROP DATABASE IF EXISTS office_db;

CREATE DATABASE office_db;

USE office_db;

CREATE TABLE department (
	id INT NOT NULL AUTO_INCREMENT,
    name varchar (30),
    PRIMARY KEY (id)
);

CREATE TABLE role (
	id int NOT NULL AUTO_INCREMENT,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INT,
    PRIMARY KEY (id)
    
);

CREATE TABLE employee (
	id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
    manager_id int NOT NULL,
    PRIMARY KEY (id)
);


