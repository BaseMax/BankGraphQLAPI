import { Injectable } from '@nestjs/common';
import { CreateEmployeeInput } from './dto/create-employee.input';
import { UpdateEmployeeInput } from './dto/update-employee.input';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class EmployeesService {
  constructor(private prisma: PrismaService) {}

  async createEmployee(input: CreateEmployeeInput) {
    return await this.prisma.employee.create({ data: input });
  }

  async getAllEmployees() {
    return await this.prisma.employee.findMany({ include: { branch: true } });
  }

  async getEmployee(id: string) {
    return await this.prisma.employee.findUnique({ where: { id }, include: { branch: true } });
  }

  async updateEmployee(input: UpdateEmployeeInput) {
    return await this.prisma.employee.update({ where: { id: input.id }, data: input });
  }

  async deleteEmployee(id: string) {
    return await this.prisma.employee.delete({ where: { id } });
  }
}