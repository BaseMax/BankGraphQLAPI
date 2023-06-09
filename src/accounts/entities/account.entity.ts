import { ObjectType, Field, ID, Float } from "@nestjs/graphql";
import { Client } from "src/clients/entities/client.entity";
import { Transaction } from "src/transactions/entities/transaction.entity";

@ObjectType()
export class Account {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  accountNumber: string;

  @Field(() => Float)
  balance: number;

  @Field(() => Client)
  client: Client;

  @Field(() => String)
  clientId: string;

  @Field(() => Transaction)
  outgoingTransactions: Transaction[];

  @Field(() => Transaction)
  incomingTransactions: Transaction[];
}
