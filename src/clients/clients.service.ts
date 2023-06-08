import { Injectable } from "@nestjs/common";
import { CreateClientInput } from "./dto/create-client.input";
import { UpdateClientInput } from "./dto/update-client.input";
import { Client } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";
// import { NationalIDScalar } from "src/national-id.scalar";

@Injectable()
export class ClientsService {
  constructor(private readonly prisma: PrismaService) {}

  async createClient(input: CreateClientInput): Promise<Client> {
    return this.prisma.client.create({
      data: input,
    });
  }

  async getAllClients(): Promise<Client[]> {
    return this.prisma.client.findMany();
  }

  async getClientByNationalIdCode(nationalIdCode: string): Promise<Client> {
    return this.prisma.client.findUnique({
      where: {
        nationalIdCode,
      },
    });
  }

  async updateClient(
    nationalIdCode: string,
    input: UpdateClientInput
  ): Promise<Client> {
    return this.prisma.client.update({
      where: {
        nationalIdCode,
      },
      data: input,
    });
  }

  async deleteClient(nationalIdCode: string): Promise<Client> {
    return this.prisma.client.delete({
      where: {
        nationalIdCode,
      },
    });
  }
}
