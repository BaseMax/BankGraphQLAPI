import { Module } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { TransactionsResolver } from './transactions.resolver';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [TransactionsResolver, TransactionsService, PrismaService]
})
export class TransactionsModule {}
