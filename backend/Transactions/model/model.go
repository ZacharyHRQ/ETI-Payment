package model

type Transaction struct {
	TransactionId    string `json:"transactionid"`
	SenderWalletId   string `json:"senderwalletid"`
	ReceiverWalletId string `json:"receiverwalletid"`
	TokenId          string `json:"tokenid"`
	NumTokens        int    `json:"numtokens"`
}
