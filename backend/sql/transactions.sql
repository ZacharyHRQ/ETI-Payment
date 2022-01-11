CREATE DATABASE IF NOT EXISTS Payment;

Use Payment;

Drop Table if exists Payment.Transactions;

CREATE TABLE Transactions (TransactionId int  PRIMARY KEY auto_increment, SenderWalletId VARCHAR(120), ReceiverWalletId VARCHAR(120), TokenId VARCHAR(8), NumTokens int); 

INSERT INTO Transactions (SenderWalletId, ReceiverWalletId, TokenId, NumTokens) VALUES ("fb00009f-4026-4189-8645-7790668e634a", "8362722e-7664-48d2-95b1-f81c4a593ca2", "CM",10);

SELECT * FROM Payment.Transactions;


