import { ObjectType, Field, ID, Float } from "@nestjs/graphql";
import { Account } from "src/accounts/entities/account.entity";

@ObjectType()
export class Transaction {
  @Field(() => ID)
  id: string;

  @Field(() => Float)
  amount: number;

  @Field(() => Account)
  sender: Account;

  @Field(() => String)
  senderId: string;

  @Field(() => Account)
  receiver: Account;

  @Field(() => String)
  receiverId: string;

  @Field(() => Date)
  createdAt: Date;
}
