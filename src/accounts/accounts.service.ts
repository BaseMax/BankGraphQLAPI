import { Injectable } from "@nestjs/common";
import { CreateAccountInput } from "./dto/create-account.input";
import { UpdateAccountInput } from "./dto/update-account.input";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class AccountsService {
  constructor(private readonly prisma: PrismaService) {}

  async createAccount(input: CreateAccountInput) {
    return this.prisma.account.create({
      data: { ...input, accountNumber: Math.random().toString() },
    });
  }

  async getAllAccounts(clientId: string) {
    return this.prisma.account.findMany({
      where: { clientId },
      include: {
        client: true,
        outgoingTransactions: true,
        incomingTransactions: true,
      },
    });
  }

  async getAccount(id: string) {
    return this.prisma.account.findUnique({
      where: { id },
      include: {
        client: true,
        outgoingTransactions: true,
        incomingTransactions: true,
      },
    });
  }

  async updateAccount(input: UpdateAccountInput) {
    return this.prisma.account.update({
      where: { id: input.id },
      data: input,
    });
  }

  async deleteAccount(id: string) {
    return this.prisma.account.delete({
      where: { id },
    });
  }
}
