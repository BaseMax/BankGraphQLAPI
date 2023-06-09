import { Module } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { EmployeesResolver } from './employees.resolver';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [EmployeesResolver, EmployeesService, PrismaService]
})
export class EmployeesModule {}
