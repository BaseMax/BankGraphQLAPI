import { Module } from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { AccountsResolver } from './accounts.resolver';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [AccountsResolver, AccountsService, PrismaService]
})
export class AccountsModule {}
