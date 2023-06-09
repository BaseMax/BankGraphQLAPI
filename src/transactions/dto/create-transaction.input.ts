import { InputType, Field, Float } from '@nestjs/graphql';

@InputType()
export class CreateTransactionInput {
  @Field(() => String)
  senderId: string;

  @Field(() => String)
  receiverId: string;

  @Field(() => Float)
  amount: number;
}
