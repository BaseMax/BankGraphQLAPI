import { Resolver, Query, Mutation, Args, Int } from "@nestjs/graphql";
import { EmployeesService } from "./employees.service";
import { Employee } from "./entities/employee.entity";
import { CreateEmployeeInput } from "./dto/create-employee.input";
import { UpdateEmployeeInput } from "./dto/update-employee.input";

@Resolver(() => Employee)
export class EmployeesResolver {
  constructor(private employeeService: EmployeesService) {}

  @Query()
  async getAllEmployees() {
    return this.employeeService.getAllEmployees();
  }

  @Query()
  async getEmployee(@Args("id") id: string) {
    return this.employeeService.getEmployee(id);
  }

  @Mutation()
  async createEmployee(@Args("input") input: CreateEmployeeInput) {
    return this.employeeService.createEmployee(input);
  }

  @Mutation()
  async updateEmployee(@Args("input") input: UpdateEmployeeInput) {
    return this.employeeService.updateEmployee(input);
  }

  @Mutation()
  async deleteEmployee(@Args("id") id: string) {
    return this.employeeService.deleteEmployee(id);
  }
}
