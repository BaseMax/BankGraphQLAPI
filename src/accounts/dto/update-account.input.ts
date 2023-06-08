import { CreateAccountInput } from './create-account.input';
import { InputType, Field, PartialType, Float } from '@nestjs/graphql';

@InputType()
export class UpdateAccountInput extends PartialType(CreateAccountInput) {
  @Field(() => String)
  accountNumber?: string;

  @Field(() => Float)
  balance?: number;
}
