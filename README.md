# Bank GraphQL API Project

This project is a GraphQL-based API designed for a bank system, implemented using TypeScript, NestJS, and MariaDB. The main purpose of this project is to handle transactions and calculate the balance of client accounts. Each client is only able to create one account, which is referenced to their national ID code. To accomplish this, several tables have been created, including a table for clients, one for the bank, another for branches, and another for bank employees. Additionally, more tables have been created for transactions and other relevant information. This project utilizes SQL transactions, including rollback and commit features, to ensure data integrity when moving money.

## Prerequisites

Before running this project, you need to have the following tools installed on your machine:

- NPM
- Node.js
- TypeScript
- NestJS
- GraphQL
- MariaDB

## Installation

- Clone the repository
- Navigate to the project directory and run npm install to install all dependencies.
- Create a `.env` file and configure the following variables:

```makefile
DATABASE_HOST=<your database host>
DATABASE_PORT=<your database port>
DATABASE_USERNAME=<your database username>
DATABASE_PASSWORD=<your database password>
DATABASE_NAME=<your database name>
```
- Run npm run build to build the project.
- Run npm start to start the server.

## API Endpoints

This project provides the following GraphQL API endpoints:

- Client
 - createClient - create a new client
 - getAllClients - get all clients
 - getClient - get client information by national ID code
 - updateClient - update client information by national ID code
 - deleteClient - delete client information by national ID code
- Account
 - createAccount - create a new account for a client
 - getAllAccounts - get all accounts for a client
 - getAccount - get account information by account ID
 - updateAccount - update account information by account ID
 - deleteAccount - delete account information by account ID
- Transaction
 - createTransaction - create a new transaction
 - getTransaction - get transaction information by transaction ID
- Branch
 - createBranch - create a new branch
 - getAllBranches - get all branches
 - getBranch - get branch information by branch ID
 - updateBranch - update branch information by branch ID
 - deleteBranch - delete branch information by branch ID
- Employee
 - createEmployee - create a new employee
 - getAllEmployees - get all employees
 - getEmployee - get employee information by employee ID
 - updateEmployee - update employee information by employee ID
 - deleteEmployee - delete employee information by employee ID

## SQL Transactions

This project utilizes SQL transactions to ensure data integrity when moving money. When a transaction is initiated, the server first checks if the account has sufficient funds. If so, the transaction is executed and the funds are transferred. If not, the transaction is rolled back and an error message is returned. This process ensures that the database remains in a consistent state, even in the case of unexpected errors.

## Conclusion

This GraphQL-based API project provides a secure and efficient way to handle transactions and calculate the balance of client accounts in a bank system. The project utilizes TypeScript, NestJS, and MariaDB, and incorporates SQL transactions to ensure data integrity.

Copyright 2023, Max Base
