import { Injectable } from "@nestjs/common";
import { CreateClientInput } from "./dto/create-client.input";
import { UpdateClientInput } from "./dto/update-client.input";
import { Client } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";
import { Parent, ResolveField } from "@nestjs/graphql";
import { Account } from "src/accounts/entities/account.entity";
// import { NationalIDScalar } from "src/national-id.scalar";

@Injectable()
export class ClientsService {
  constructor(private readonly prisma: PrismaService) {}

  async createClient(input: CreateClientInput): Promise<Client> {
    return await this.prisma.client.create({
      data: input,
    });
  }

  async getAllClients(): Promise<Client[]> {
    return await this.prisma.client.findMany({
      include: {
        accounts: true,
      },
    }); 
  }

  async getClientByNationalIdCode(nationalIdCode: string): Promise<Client> {
    return await this.prisma.client.findUnique({
      where: {
        nationalIdCode,
      },
    });
  }

  async updateClient(
    nationalIdCode: string,
    input: UpdateClientInput
  ): Promise<Client> {
    return await this.prisma.client.update({
      where: {
        nationalIdCode,
      },
      data: input,
    });
  }

  async deleteClient(nationalIdCode: string): Promise<Client> {
    return await this.prisma.client.delete({
      where: {
        nationalIdCode,
      },
    });
  }

  @ResolveField(() => [Account])
  async accounts(@Parent() client: Client) {
    return this.prisma.account.findMany({ where: { clientId: client.id } });
  }
}
