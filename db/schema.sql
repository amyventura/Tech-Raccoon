DROP DATABASE IF EXISTS TechRaccoon;

CREATE DATABASE TechRaccoon;

USE TechRaccoon;

CREATE TABLE IF NOT EXISTS jobseekers (
  id INT AUTO_INCREMENT,
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
  yr_exp INT NULL,
  education_id INT,
  primary_tech_id INT,
  secondary_tech_id INT,
  github VARCHAR(10) NOT NULL,
  remote BOOLEAN NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS jobs (
  id INT AUTO_INCREMENT,
  comp_name VARCHAR (30) NOT NULL,
  job_descrip VARCHAR(1000) NOT NULL,
  education_id INT,
  primary_tech_id INT,
  secondary_tech_id INT,
  remote BOOLEAN NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS education (
	id INT AUTO_INCREMENT,
    name VARCHAR(25) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS tech (
	id INT AUTO_INCREMENT,
    name VARCHAR(25) NOT NULL,
    PRIMARY KEY (id)
);

