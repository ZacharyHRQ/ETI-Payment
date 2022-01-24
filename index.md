# ETI-Payment

Payment package within a micro-services

Full url link 'http://testserver/'.

## Ports

- 9230 -> Payment frontend
- 9231 -> Payment database
- 9232 -> Transaction service
- 9233 -> Payment service

## Dependencies

- QnA service
- Marks wallet service
- Module service

## Features

1. Revealing answers to whoever that pays the token fees amount

   - receive call from QnA service
   - check module token equal to module token given
   - run feature 2 and 3 if checks do not return errors
   - frontend button on QnA frontend to call to payment service

2. Substract from wallet to reveal answer

   - check if they have sufficient tokens to reveal answers
   - interaction with wallet service to deduct tokens
   - interaction with transaction service to save this deduction transaction

3. Add to wallet of creator of QnA post

   - interaction with QnA service to find creator of post
   - interaction with wallet service to find wallet of creator of post
   - interaction with wallet service add tokens received from process (2) into wallet of creator of post
   - interaction with transaction service to save this addition transaction

4. Track transaction history

   - interaction with wallet service to fetch user wallet
   - interaction with transaction service to retrieve transaction of wallet user
   - frontend on QnA page to redirect to transactions frontend
   - frontend to show the transactions of user wallet

## Endpoints that require Authentication

Closed endpoints require a sign in as student to be included in the header of the
request.

### POST payment/reveal

This endpoint to reveal marks to requestor that paid using module tokens

#### Endpoint URL

> http://localhost:5001/api/v1/payment/reveal/{WalletID}

#### JSON Body Parameters

| Name        | Type   | Required | Description                      |
| ----------- | ------ | -------- | -------------------------------- |
| WalletId    | string | Required | unique indentifer of Wallet      |
| QnAPostId   | string | Required | unique indentifer of Transaction |
| TokenId     | string | Required | unique indentifer of Token       |
| TokenNumber | int    | Required | number of tokens                 |

#### Example Request

cURL

```bash
curl --request POST 'http://localhost:5001/api/v1/payment/reveal' \
--header 'Content-Type: application/json' \
--data '{
    "email":"a@b.com",
    "phone": "99999999",
    "firstName": "Bob",
    "lastName": "Dylan"
}'
```

Windows cURL

```cmd
curl --request POST "http://localhost:5001/api/v1/passenger/account" --header "Content-Type: application/json" --data "{\"email\":\"a@b.com\",\"phone\": \"99999999\",\"firstName\": \"Bob\",\"lastName\": \"Dylan\"}"
```

#### Response

The response will be a status code `200` is successful, or an error code with a corresponding status message if unsuccessful.

## Data structure

### Transaction Table

| Name             | Description                                      | type   |
| ---------------- | ------------------------------------------------ | ------ |
| TransactionId    | unique indentifer of Transaction                 | string |
| SenderWalletId   | unique indentifer of sender wallet               | string |
| ReceiverWalletId | unique indentifer of receiver wallet             | string |
| TokenId          | unique type of token (eg CM token for module CM) | string |
| NumTokens        | number of tokens                                 | int    |

