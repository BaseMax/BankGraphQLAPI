import { InputType, Field } from "@nestjs/graphql";
import { IsEmail } from "class-validator";
import { NationalIDScalar } from "src/national-id.scalar";

@InputType()
export class CreateClientInput {
  @Field(() => NationalIDScalar)
  nationalIdCode: string;

  @Field(() => String)
  firstName: string;

  @Field(() => String)
  lastName: string;

  @IsEmail({}, { message: "Invalid email address" })
  @Field(() => String)
  email: string;
}
