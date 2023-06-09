import { Test, TestingModule } from '@nestjs/testing';
import { TransactionsResolver } from './transactions.resolver';
import { TransactionsService } from './transactions.service';

describe('TransactionsResolver', () => {
  let resolver: TransactionsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TransactionsResolver, TransactionsService],
    }).compile();

    resolver = module.get<TransactionsResolver>(TransactionsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
