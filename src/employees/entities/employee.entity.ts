import { ObjectType, Field, Int, ID } from "@nestjs/graphql";
import { Branch } from "src/branches/entities/branch.entity";
import { IsEmail } from "class-validator";

@ObjectType()
export class Employee {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  firstName: string;

  @Field(() => String)
  lastName: string;

  @IsEmail({}, { message: "Invalid email address" })
  @Field(() => String)
  email: string;

  @Field(() => Branch)
  branch: Branch;

  @Field(() => String)
  branchId: string;
}
