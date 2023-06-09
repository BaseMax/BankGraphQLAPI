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

## Testing GraphQL API

To test the GraphQL API, we can use a tool such as GraphiQL or Apollo Studio Explorer. These tools allow us to send queries and mutations to the API and view the responses.

### Examples

Create a new client

```graphql
mutation {
  createClient(input: {
    nationalIdCode: "1234567890",
    firstName: "John",
    lastName: "Doe",
    email: "johndoe@example.com"
  }) {
    id
    nationalIdCode
    firstName
    lastName
    email
  }
}
```

Response:

```json
{
  "data": {
    "createClient": {
      "id": "1",
      "nationalIdCode": "1234567890",
      "firstName": "John",
      "lastName": "Doe",
      "email": "johndoe@example.com"
    }
  }
}
```

Get all clients

```graphql
query {
  getAllClients {
    id
    nationalIdCode
    firstName
    lastName
    email
  }
}
```

Response:

```json
{
  "data": {
    "getAllClients": [
      {
        "id": "1",
        "nationalIdCode": "1234567890",
        "firstName": "John",
        "lastName": "Doe",
        "email": "johndoe@example.com"
      },
      {
        "id": "2",
        "nationalIdCode": "0987654321",
        "firstName": "Jane",
        "lastName": "Doe",
        "email": "janedoe@example.com"
      }
    ]
  }
}
```

Get client by national ID code

```graphql
query {
  getClient(nationalIdCode: "1234567890") {
    id
    nationalIdCode
    firstName
    lastName
    email
  }
}
```

Response:

```json
{
  "data": {
    "getClient": {
      "id": "1",
      "nationalIdCode": "1234567890",
      "firstName": "John",
      "lastName": "Doe",
      "email": "johndoe@example.com"
    }
  }
}
```

Update client information

```graphql
mutation {
  updateClient(nationalIdCode: "1234567890", input: {
    firstName: "Johnny",
    lastName: "Doe",
    email: "johnnydoe@example.com"
  }) {
    id
    nationalIdCode
    firstName
    lastName
    email
  }
}
```

Response:

```json
{
  "data": {
    "updateClient": {
      "id": "1",
      "nationalIdCode": "1234567890",
      "firstName": "Johnny",
      "lastName": "Doe",
      "email": "johnnydoe@example.com"
    }
  }
}
```

Delete client information

```graphql
mutation {
  deleteClient(nationalIdCode: "1234567890") {
    id
    nationalIdCode
    firstName
    lastName
    email
  }
}
```

Response:

```json
{
  "data": {
    "deleteClient": {
      "id": "1",
      "nationalIdCode": "1234567890",
      "firstName": "Johnny",
      "lastName": "Doe",
      "email": "johnnydoe@example.com"
    }
}
```

Create a new transaction

```graphql
mutation {
  createTransaction(input: {
    senderNationalIdCode: "1234567890",
    receiverNationalIdCode: "0987654321",
    amount: 100.0
  }) {
    id
    sender {
      id
      nationalIdCode
    }
    receiver {
      id
      nationalIdCode
    }
    amount
  }
}
```

Response:

```json
{
  "data": {
    "createTransaction": {
      "id": "1",
      "sender": {
        "id": "1",
        "nationalIdCode": "1234567890"
      },
      "receiver": {
        "id": "2",
        "nationalIdCode": "0987654321"
      },
      "amount": 100.0
    }
  }
}
```

Get all transactions

```graphql
query {
  getAllTransactions {
    id
    sender {
      id
      nationalIdCode
    }
    receiver {
      id
      nationalIdCode
    }
    amount
    createdAt
  }
}
```

Response:

```json
{
  "data": {
    "getAllTransactions": [
      {
        "id": "1",
        "sender": {
          "id": "1",
          "nationalIdCode": "1234567890"
        },
        "receiver": {
          "id": "2",
          "nationalIdCode": "0987654321"
        },
        "amount": 100.0,
        "createdAt": "2023-05-09T11:15:30.000Z"
      },
      {
        "id": "2",
        "sender": {
          "id": "2",
          "nationalIdCode": "0987654321"
        },
        "receiver": {
          "id": "1",
          "nationalIdCode": "1234567890"
        },
        "amount": 50.0,
        "createdAt": "2023-05-09T11:17:30.000Z"
      }
    ]
  }
}
```

Get all transactions for a client

```graphql
query {
  getTransactionsForClient(nationalIdCode: "1234567890") {
    id
    sender {
      id
      nationalIdCode
    }
    receiver {
      id
      nationalIdCode
    }
    amount
    createdAt
  }
}
```

Response:

```json
{
  "data": {
    "getTransactionsForClient": [
      {
        "id": "1",
        "sender": {
          "id": "1",
          "nationalIdCode": "1234567890"
        },
        "receiver": {
          "id": "2",
          "nationalIdCode": "0987654321"
        },
        "amount": 100.0,
        "createdAt": "2023-05-09T11:15:30.000Z"
      },
      {
        "id": "2",
        "sender": {
          "id": "2",
          "nationalIdCode": "0987654321"
        },
        "receiver": {
          "id": "1",
          "nationalIdCode": "1234567890"
        },
        "amount": 50.0,
        "createdAt": "2023-05-09T11:17:30.000Z"
      }
    ]
  }
}
```

Get account balance for a client

```graphql
query {
  getAccountBalance(nationalIdCode: "1234567890")
}
```

Response:

```json
{
  "data": {
    "getAccountBalance": 50.0
  }
}
```

## Tests

We can write tests for our GraphQL API using tools like Jest and Supertest.

Test creating a new client

```typescript
import { createTestClient } from 'apollo-server-testing';
import { ApolloServer } from 'apollo-server-express';
import { gql } from 'apollo-server-core';
import { schema } from './schema';
import { Client } from './client.model';
import { getClientById } from './client.repository';

const CREATE_CLIENT_MUTATION = gql`
  mutation {
    createClient(input: {
      name: "John Doe",
      nationalIdCode: "1234567890"
    }) {
      id
      name
      nationalIdCode
    }
  }
`;

describe('createClient mutation', () => {
  it('creates a new client', async () => {
    const server = new ApolloServer({ schema });
    const { mutate } = createTestClient(server);

    const res = await mutate({
      mutation: CREATE_CLIENT_MUTATION,
    });

    expect(res.errors).toBeUndefined();
    expect(res.data).toBeDefined();
    expect(res.data.createClient.id).toBeDefined();
    expect(res.data.createClient.name).toEqual('John Doe');
    expect(res.data.createClient.nationalIdCode).toEqual('1234567890');

    const createdClient = await getClientById(res.data.createClient.id);
    expect(createdClient).toMatchObject({
      id: res.data.createClient.id,
      name: 'John Doe',
      nationalIdCode: '1234567890',
    });
  });
});
```

Test creating a new transaction

```typescript
import { createTestClient } from 'apollo-server-testing';
import { ApolloServer } from 'apollo-server-express';
import { gql } from 'apollo-server-core';
import { schema } from './schema';
import { Transaction } from './transaction.model';
import { getTransactionById } from './transaction.repository';

const CREATE_TRANSACTION_MUTATION = gql`
  mutation {
    createTransaction(input: {
      senderNationalIdCode: "1234567890",
      receiverNationalIdCode: "0987654321",
      amount: 100.0
    }) {
      id
      sender {
        id
        nationalIdCode
      }
      receiver {
        id
        nationalIdCode
      }
      amount
    }
  }
`;

describe('createTransaction mutation', () => {
  it('creates a new transaction', async () => {
    const server = new ApolloServer({ schema });
    const { mutate } = createTestClient(server);

    const res = await mutate({
      mutation: CREATE_TRANSACTION_MUTATION,
    });

    expect(res.errors).toBeUndefined();
    expect(res.data).toBeDefined();
    expect(res.data.createTransaction.id).toBeDefined();
    expect(res.data.createTransaction.sender.id).toBeDefined();
    expect(res.data.createTransaction.sender.nationalIdCode).toEqual('1234567890');
    expect(res.data.createTransaction.receiver.id).toBeDefined();
    expect(res.data.createTransaction.receiver.nationalIdCode).toEqual('0987654321');
    expect(res.data.createTransaction.amount).toEqual(100.0);

    const createdTransaction = await getTransactionById(res.data.createTransaction.id);
    expect(createdTransaction).toMatchObject({
      id: res.data.createTransaction.id,
      senderId: res.data.createTransaction.sender.id,
      receiverId: res.data.createTransaction.receiver.id,
      amount: 100.0,
    });
  });
});
```

Test getting all transactions

```typescript
import { createTestClient } from 'apollo-server-testing';
import { ApolloServer } from 'apollo-server-express';
import { schema } from './schema';
import { Transaction } from './transaction.model';
import { getAllTransactions } from './transaction.repository';
import { gql } from '...';

const GET_ALL_TRANSACTIONS_QUERY = gql query { getAllTransactions { id sender { id nationalIdCode } receiver { id nationalIdCode } amount } };

describe('getAllTransactions query', () => {
 it('returns all transactions', async () => {
   // Seed the database with some transactions
   await Transaction.create({
    senderId: '1',
    receiverId: '2',
    amount: 50.0,
   });
   await Transaction.create({
    senderId: '2',
    receiverId: '3',
    amount: 25.0,
   });

  const server = new ApolloServer({ schema });
  const { query } = createTestClient(server);

  const res = await query({
    query: GET_ALL_TRANSACTIONS_QUERY,
  });

  expect(res.errors).toBeUndefined();
  expect(res.data).toBeDefined();
  expect(res.data.getAllTransactions.length).toEqual(2);
  expect(res.data.getAllTransactions[0].id).toBeDefined();
  expect(res.data.getAllTransactions[0].sender.id).toBeDefined();
  expect(res.data.getAllTransactions[0].sender.nationalIdCode).toEqual('1234567890');
  expect(res.data.getAllTransactions[0].receiver.id).toBeDefined();
  expect(res.data.getAllTransactions[0].receiver.nationalIdCode).toEqual('0987654321');
  expect(res.data.getAllTransactions[0].amount).toEqual(50.0);
  expect(res.data.getAllTransactions[1].id).toBeDefined();
  expect(res.data.getAllTransactions[1].sender.id).toBeDefined();
  expect(res.data.getAllTransactions[1].sender.nationalIdCode).toEqual('0987654321');
  expect(res.data.getAllTransactions[1].receiver.id).toBeDefined();
  expect(res.data.getAllTransactions[1].receiver.nationalIdCode).toEqual('1357908642');
  expect(res.data.getAllTransactions[1].amount).toEqual(25.0);

  const allTransactions = await getAllTransactions();
  expect(allTransactions.length).toEqual(2);
 });
});
```

These tests cover some basic functionality of our GraphQL API, but you should write more tests to cover all possible scenarios and edge cases.

## Conclusion

This GraphQL-based API project provides a secure and efficient way to handle transactions and calculate the balance of client accounts in a bank system. The project utilizes TypeScript, NestJS, and MariaDB, and incorporates SQL transactions to ensure data integrity.

Copyright 2023, Max Base
