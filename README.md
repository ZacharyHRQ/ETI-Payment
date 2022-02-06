# ETI-Payment

Payment package within a micro-services

<!-- Full url link 'http://10.31.11.12:9230/'. -->

## Dependencies

- QnA service
- Marks wallet service

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

## Architecture Diagram

![Architecture Diagram](https://github.com/ZacharyHRQ/ETI-Payment/blob/main/arch.png)

### API docs

![Postman docs](https://documenter.getpostman.com/view/10062823/UVeGpQmT)

### Docker container links

These are the containers for each service

![Frontend](https://hub.docker.com/repository/docker/ubotter/edufi3.18-frontend)
![Payment](https://hub.docker.com/repository/docker/ubotter/edufi3.18-payment)
![Transactions](https://hub.docker.com/repository/docker/ubotter/edufi3.18-transactions)
![Mockdb](https://hub.docker.com/repository/docker/ubotter/edufi3.18-mockdb)

### Prerequites

- [NodeJs](https://nodejs.org/en/) (comes with npm)
- Golang
- [Docker](https://www.docker.com/get-started)

### How to run

#### Run the application using docker-compose

This command is run the docker compose script, it starts up all the service together with the database loaded with the sql script.

```bash
docker-compose up
```

## Design consideration

### Architecture of microservices

There are 3 microservices (Transaction, Payment and Mockdata). The Transaction service is used for created and retriving transactions based on the walletid. The Payment service will handle the user request for payment and will call the Transaction service to record the payment as a transaction. The mockdata service will act as an backup database service if services that the payment service is dependent on are down or unreachable. In normal situation the mockdata service would not used.

### Separation of concerns for transactions and payment

As the payment process is long and complex with multiple checks in place, it is important to split the recording and checking processes, allowing for more maintainable code. The main role of the payment service would be to check if the wallet that is sending the tokens have sufficient funds.
While the transaction service records the payment as a proof that the payment has gone through.

It is best practices to allow each portion of the program to handle one portion of application logic. In addition, this gives better isolation of logic which aids in maintainability as logic is associated to a particual domain.

### Why use docker compose

The use of containers can help with scalabilty and deployment of the application. In addition, docker compose can help to run all the containers at once and create virtual networks which isolate the containers into their own virtual network without distrubing the host machine. Previously without using docker compose, one needs to individually run the services taking alot of time.

### Why use CICD

The use of CICD is to help with automating the process of constantly pushing the docker image together will checking the dockerfile for any errors before the compling. This save alot of time and allows the developer to save time on redundant work.

## Ports

- 9230 -> Payment frontend
- 9231 -> Transaction service
- 9232 -> Payment service
- 9233 -> Mockdata service

## Data structure

### Transaction Table

| Name                 | Description                                      | type   |
| -------------------- | ------------------------------------------------ | ------ |
| TransactionId        | unique indentifer of Transaction                 | string |
| TransactionTimeStamp | timestamp of the transaction                     | string |
| SenderWalletId       | unique indentifer of sender wallet               | string |
| ReceiverWalletId     | unique indentifer of receiver wallet             | string |
| AnswerId             | unique indentifer of answer revealed             | string |
| TokenId              | unique type of token (eg CM token for module CM) | string |
| NumTokens            | number of tokens                                 | int    |
