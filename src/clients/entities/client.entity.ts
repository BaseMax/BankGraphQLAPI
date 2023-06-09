import { ObjectType, Field, ID } from "@nestjs/graphql";
import { IsEmail } from "class-validator";
import { Account } from "src/accounts/entities/account.entity";
import { NationalIDScalar } from "src/national-id.scalar";

@ObjectType()
export class Client {
  @Field(() => ID)
  id: string;

  @Field(() => NationalIDScalar)
  nationalIdCode: string;

  @Field(() => String)
  firstName: string;

  @Field(() => String)
  lastName: string;

  @IsEmail({}, { message: "Invalid email address" })
  @Field(() => String)
  email: string;

  @Field(() => Account, { nullable: true })
  accounts: Account[];
}
