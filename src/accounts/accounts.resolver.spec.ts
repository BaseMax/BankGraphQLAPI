import { Test, TestingModule } from '@nestjs/testing';
import { AccountsResolver } from './accounts.resolver';
import { AccountsService } from './accounts.service';

describe('AccountsResolver', () => {
  let resolver: AccountsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AccountsResolver, AccountsService],
    }).compile();

    resolver = module.get<AccountsResolver>(AccountsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
