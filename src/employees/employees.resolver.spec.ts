import { Test, TestingModule } from '@nestjs/testing';
import { EmployeesResolver } from './employees.resolver';
import { EmployeesService } from './employees.service';

describe('EmployeesResolver', () => {
  let resolver: EmployeesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmployeesResolver, EmployeesService],
    }).compile();

    resolver = module.get<EmployeesResolver>(EmployeesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
