import { ObjectType, Field, ID } from "@nestjs/graphql";
import { IsEmail } from "class-validator";
import { NationalIDScalar } from "src/national-id.scalar";

@ObjectType()
export class Client {
  @Field(() => ID)
  id: string;

  @Field(() => NationalIDScalar)
  nationalIdCode: NationalIDScalar;

  @Field(() => String)
  firstName: string;

  @Field(() => String)
  lastName: string;

  @IsEmail({}, { message: "Invalid email address" })
  @Field(() => String)
  email: string;
}
