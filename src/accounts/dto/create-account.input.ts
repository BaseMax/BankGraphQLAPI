import { InputType, Field, Float } from '@nestjs/graphql';

@InputType()
export class CreateAccountInput {
  @Field(() => String)
  accountNumber: string;

  @Field(() => Float)
  balance: number;

  @Field(() => String)
  clientId: string;
}
