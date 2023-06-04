CREATE TABLE user_profiles (
  id INT(11) PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL
);


INSERT INTO user_profiles (username, email) VALUES
('John Doe', 'john@example.com'),
('Jane Smith', 'jane@example.com'),
('Bob Johnson', 'bob@example.com');


CREATE TABLE question_bank (
  id INT(11) PRIMARY KEY,
  question VARCHAR(255) NOT NULL,
  answer VARCHAR(255) NOT NULL,
  subject VARCHAR(255) NOT NULL
);


CREATE TABLE log_in (
  id INT(11) PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  role VARCHAR(255) NOT NULL
);


CREATE TABLE sign_up (
  id INT(11)  PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL
);


INSERT INTO question_bank (question, answer, subject) VALUES
('Question 1', 'Answer 1', 'Math'),
('Question 2', 'Answer 2', 'Science'),
('Question 3', 'Answer 3', 'English');

INSERT INTO login (username, password, role) VALUES
('admin', 'admin123', 'admin');

INSERT INTO sign_up (username, email, password) VALUES
('user1', 'user1@example.com', 'password123');




CREATE TABLE english_question_bank (
  id INT PRIMARY KEY,
  question VARCHAR(255) NOT NULL,
  answer VARCHAR(255) NOT NULL
);

CREATE TABLE math_question_bank (
  id INT PRIMARY KEY,
  question VARCHAR(255) NOT NULL,
  answer VARCHAR(255) NOT NULL
);


CREATE TABLE english_question_bank_files (
  id INT PRIMARY KEY,
  file_title VARCHAR(255) NOT NULL,
  file_path VARCHAR(255) NOT NULL
);

CREATE TABLE math_question_bank_files (
  id INT PRIMARY KEY,
  file_title VARCHAR(255) NOT NULL,
  file_path VARCHAR(255) NOT NULL
);



CREATE TABLE User_ID(
  id INT  PRIMARY KEY,
  username VARCHAR(50) NOT NULL,
  password VARCHAR(50) NOT NULL,
  email VARCHAR(50) NOT NULL
);


CREATE TABLE Question (
  id INT  PRIMARY KEY,
  question_text TEXT NOT NULL,
  option1 TEXT NOT NULL,
  option2 TEXT NOT NULL,
  option3 TEXT NOT NULL,
  option4 TEXT NOT NULL,
  correct_option INT NOT NULL
);

CREATE TABLE Answer (
  id INT  PRIMARY KEY,
  user_id INT NOT NULL,
  question_id INT NOT NULL,
  answer INT NOT NULL,
  FOREIGN KEY (answer_id) REFERENCES Answer(id),
  FOREIGN KEY (question_id) REFERENCES Question(id)
);


CREATE TABLE UserProfile (
  id INT  PRIMARY KEY,
  user_id INT NOT NULL,
  name VARCHAR(50) NOT NULL,
  email VARCHAR(50) NOT NULL,
  FOREIGN KEY (userprofile_id) REFERENCES UserProfile(id)
);


CREATE TABLE AdminPanel (
  id INT  PRIMARY KEY,
  username VARCHAR(50) NOT NULL,
  password VARCHAR(50) NOT NULL
);

CREATE TABLE SubjectID (
  id INT  PRIMARY KEY,
  subject_name VARCHAR(50) NOT NULL
);

CREATE TABLE GeneratedQuestion (
  id INT  PRIMARY KEY,
  subject_id INT NOT NULL,
  question_id INT NOT NULL,
  FOREIGN KEY (subject_id) REFERENCES Subject(id),
  FOREIGN KEY (question_id) REFERENCES Question(id)
);
