
DROP DATABASE IF EXISTS office_db;

CREATE DATABASE office_db;

USE office_db;

CREATE TABLE department (
	id INT NOT NULL,
    name varchar (30),
    PRIMARY KEY (id)
);

CREATE TABLE role (
	id int,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INT,
    PRIMARY KEY (id)
    
);

CREATE TABLE employee (
	id INT NOT NULL,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_name INT,
    manager_id int,
    PRIMARY KEY (id)
);