CREATE DATABASE IF NOT EXISTS Payment;

CREATE USER 'user'@'localhost' IDENTIFIED BY '123';
GRANT ALL PRIVILEGES ON *.* TO 'user'@'%';

Use Payment;

Drop Table if exists Payment.Transactions;

CREATE TABLE Transactions (TransactionId VARCHAR(120)  PRIMARY KEY, TransactionTimeStamp TIMESTAMP DEFAULT NOW(), SenderWalletId VARCHAR(120), ReceiverWalletId VARCHAR(120), AnswerId VARCHAR(120),  TokenId VARCHAR(8), NumTokens int); 

SELECT * FROM Payment.Transactions;

CREATE DATABASE IF NOT EXISTS mockdb;

USE mockdb;

Drop Table if exists mockdb.Wallet;
Drop Table if exists mockdb.Question;
Drop Table if exists mockdb.Answer;

CREATE TABLE Wallet (WalletId int PRIMARY KEY auto_increment, StudentId VARCHAR(120), TokenId VARCHAR(8), NumTokens int); 
CREATE TABLE Question (QuestionId VARCHAR(120)  PRIMARY KEY, StudentId VARCHAR(120), Title VARCHAR(240), Content VARCHAR(1000), Module VARCHAR(20)); 
CREATE TABLE Answer (AnswerId VARCHAR(120)  PRIMARY KEY, QuestionId VARCHAR(120), StudentId VARCHAR(120), Content VARCHAR(1000), Paid int ); 

INSERT INTO Wallet(StudentId, TokenId, NumTokens) VALUES ("S10185319","CM",10);
INSERT INTO Wallet(StudentId, TokenId, NumTokens) VALUES ("S10185318","CM",10);
INSERT INTO Wallet(StudentId, TokenId, NumTokens) VALUES ("S10185319","CSF",10);
INSERT INTO Wallet(StudentId, TokenId, NumTokens) VALUES ("S10185319","DP",10);

SELECT * FROM mockdb.Wallet;

INSERT INTO Question(QuestionId, StudentId, Title, Content, Module) VALUES ("1","S10185319","How to do this math question?","f(x)=10","CM");

SELECT * FROM mockdb.Question;

INSERT INTO Answer(AnswerId, QuestionId, StudentId, Content, Paid) VALUES ("1", "1", "S10185318","answer is 10", 1);
INSERT INTO Answer(AnswerId, QuestionId, StudentId, Content, Paid) VALUES ("2", "1", "S10185318","Answer is 11", 0);
INSERT INTO Answer(AnswerId, QuestionId, StudentId, Content, Paid) VALUES ("3", "1", "S10185318","Answer is 12", 0);
INSERT INTO Answer(AnswerId, QuestionId, StudentId, Content, Paid) VALUES ("4", "3", "S10185318","answer is 10", 0);

SELECT * FROM mockdb.Answer;