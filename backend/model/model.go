package model

type Transaction struct {
	TransactionId        string `json:"transactionid"`
	TransactionTimeStamp string `json:"transactiontimestamp"`
	SenderWalletId       string `json:"senderwalletid"`
	ReceiverWalletId     string `json:"receiverwalletid"`
	TokenId              string `json:"tokenid"`
	NumTokens            int    `json:"numtokens"`
}
