import { CreateBranchInput } from "./create-branch.input";
import { InputType, Field, PartialType, ID } from "@nestjs/graphql";

@InputType()
export class UpdateBranchInput extends PartialType(CreateBranchInput) {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  name?: string;

  @Field(() => String)
  address?: string;
}
