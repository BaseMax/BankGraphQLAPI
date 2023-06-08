import { Module } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { ClientsResolver } from './clients.resolver';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [ClientsResolver, ClientsService, PrismaService]
})
export class ClientsModule {}
