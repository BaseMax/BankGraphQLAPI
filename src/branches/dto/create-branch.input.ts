import { InputType, Field } from "@nestjs/graphql";
import { Employee } from "src/employees/entities/employee.entity";

@InputType()
export class CreateBranchInput {
  @Field(() => String)
  name: string;

  @Field(() => String)
  address: string;
}
