DROP DATABASE IF EXISTS TechRaccoon;

CREATE DATABASE TechRaccoon;

USE TechRaccoon;

CREATE TABLE IF NOT EXISTS jobseekers (
  id INT AUTO_INCREMENT,
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
  yr_exp INT NULL,
  education_id VARCHAR(50) NOT NULL,
  primary_tech_id VARCHAR(50) NOT NULL,
  secondary_tech_id VARCHAR(50) NOT NULL,
  github VARCHAR(10) NOT NULL,
  remote VARCHAR(50) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS jobs (
  id INT AUTO_INCREMENT,
  comp_name VARCHAR (30) NOT NULL,
  job_descrip VARCHAR(1000) NOT NULL,
  education_id VARCHAR(50) NOT NULL,
  primary_tech_id VARCHAR(50) NOT NULL,
  secondary_tech_id VARCHAR(50) NOT NULL,
  remote VARCHAR(50) NOT NULL,
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

