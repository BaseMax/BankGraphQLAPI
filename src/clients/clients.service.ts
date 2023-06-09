import { Injectable } from "@nestjs/common";
import { CreateClientInput } from "./dto/create-client.input";
import { UpdateClientInput } from "./dto/update-client.input";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class ClientsService {
  constructor(private readonly prisma: PrismaService) {}

  async createClient(input: CreateClientInput) {
    return await this.prisma.client.create({
      data: input,
    });
  }

  async getAllClients() {
    return await this.prisma.client.findMany({
      include: {
        accounts: true,
      },
    });
  }

  async getClientByNationalIdCode(nationalIdCode: string) {
    return await this.prisma.client.findUnique({
      where: {
        nationalIdCode,
      },
      include: { accounts: true },
    });
  }

  async updateClient(input: UpdateClientInput) {
    return await this.prisma.client.update({
      where: { nationalIdCode: input.nationalIdCode },
      data: input,
    });
  }

  async deleteClient(nationalIdCode: string) {
    return await this.prisma.client.delete({
      where: {
        nationalIdCode,
      },
    });
  }
}
