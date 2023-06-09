import { CreateAccountInput } from './create-account.input';
import { InputType, Field, PartialType, Float, ID } from '@nestjs/graphql';

@InputType()
export class UpdateAccountInput extends PartialType(CreateAccountInput) {
  @Field(() => ID)
  id: string;

  @Field(() => Float)
  balance?: number;
}
