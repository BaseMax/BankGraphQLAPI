import { IsEmail } from "class-validator";
import { CreateEmployeeInput } from "./create-employee.input";
import { InputType, Field, PartialType, ID } from "@nestjs/graphql";

@InputType()
export class UpdateEmployeeInput extends PartialType(CreateEmployeeInput) {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  firstName?: string;

  @Field(() => String)
  lastName?: string;

  @IsEmail({}, { message: "Invalid email address" })
  @Field(() => String)
  email?: string;

  @Field(() => String)
  branchId?: string;
}
