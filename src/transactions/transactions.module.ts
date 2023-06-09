import { Module } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { TransactionsResolver } from './transactions.resolver';

@Module({
  providers: [TransactionsResolver, TransactionsService]
})
export class TransactionsModule {}
