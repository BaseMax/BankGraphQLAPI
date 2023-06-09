import { ObjectType, Field, ID } from "@nestjs/graphql";
import { Employee } from "src/employees/entities/employee.entity";

@ObjectType()
export class Branch {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  name: string;

  @Field(() => String)
  address: string;

  @Field(() => Employee)
  employees: Employee[];
}
