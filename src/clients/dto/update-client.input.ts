import { CreateClientInput } from "./create-client.input";
import { InputType, Field, PartialType } from "@nestjs/graphql";
import { IsEmail } from "class-validator";
import { NationalIDScalar } from "src/national-id.scalar";

@InputType()
export class UpdateClientInput extends PartialType(CreateClientInput) {
  @Field(() => NationalIDScalar)
  nationalIdCode: string;
  
  @Field(() => String)
  firstName?: string;

  @Field(() => String)
  lastName?: string;

  @IsEmail({}, { message: "Invalid email address" })
  @Field(() => String)
  email?: string;
}
