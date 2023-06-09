import { Test, TestingModule } from '@nestjs/testing';
import { BranchesResolver } from './branches.resolver';
import { BranchesService } from './branches.service';

describe('BranchesResolver', () => {
  let resolver: BranchesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BranchesResolver, BranchesService],
    }).compile();

    resolver = module.get<BranchesResolver>(BranchesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
