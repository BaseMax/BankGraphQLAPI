import { Module } from '@nestjs/common';
import { BranchesService } from './branches.service';
import { BranchesResolver } from './branches.resolver';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [BranchesResolver, BranchesService, PrismaService]
})
export class BranchesModule {}
