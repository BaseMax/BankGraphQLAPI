import { InputType, Field } from '@nestjs/graphql';
import { IsEmail } from "class-validator";

@InputType()
export class CreateEmployeeInput {
  @Field(() => String)
  firstName: string;

  @Field(() => String)
  lastName: string;

  @IsEmail({}, { message: "Invalid email address" })
  @Field(() => String)
  email: string;

  @Field(() => String)
  branchId: string;
}
