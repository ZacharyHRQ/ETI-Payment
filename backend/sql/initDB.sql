CREATE DATABASE IF NOT EXISTS Payment;

CREATE USER 'user'@'localhost' IDENTIFIED BY 'local';
GRANT ALL PRIVILEGES ON *.* TO 'user'@'%';


Use Payment;

Drop Table if exists Payment.Transactions;

CREATE TABLE Transactions (TransactionId VARCHAR(120)  PRIMARY KEY, TransactionTimeStamp TIMESTAMP DEFAULT NOW(), SenderWalletId VARCHAR(120), ReceiverWalletId VARCHAR(120), AnswerId VARCHAR(120),  TokenId VARCHAR(8), NumTokens int); 

SELECT * FROM Payment.Transactions;
