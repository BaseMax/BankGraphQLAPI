import { InputType, Field, Float } from '@nestjs/graphql';

@InputType()
export class CreateAccountInput {
  @Field(() => String)
  clientId: string;
}
