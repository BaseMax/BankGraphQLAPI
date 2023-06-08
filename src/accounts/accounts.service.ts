import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateAccountInput } from "./dto/create-account.input";
import { UpdateAccountInput } from "./dto/update-account.input";
import { PrismaService } from "src/prisma/prisma.service";
import { Account } from "@prisma/client";
import { Args, Parent, ResolveField } from "@nestjs/graphql";
import { Client } from "src/clients/entities/client.entity";

@Injectable()
export class AccountsService {
  constructor(private readonly prisma: PrismaService) {}

  async createAccount(
    @Args("input") input: CreateAccountInput
  ): Promise<Account> {
    const { clientId, ...rest } = input;
    const client: Client = await this.prisma.client.findUnique({
      where: { id: clientId },
    });
    if (!client) {
      throw new NotFoundException(`Client with ID ${clientId} not found`);
    }
    return await this.prisma.account.create({
      data: {
        ...rest,
        client: { connect: { id: client.id } },
      },
    });
  }

  async getAllAccounts(nationalIdCode: string): Promise<Account[]> {
    return this.prisma.account.findMany({
      where: {
        client: {
          nationalIdCode,
        },
      },
      include: {
        client: true,
      },
    });
  }

  async getAccount(accountId: string): Promise<Account> {
    return this.prisma.account.findUnique({
      where: {
        id: accountId,
      },
    });
  }

  async updateAccount(
    accountId: string,
    input: UpdateAccountInput
  ): Promise<Account> {
    return this.prisma.account.update({
      where: {
        id: accountId,
      },
      data: input,
    });
  }

  async deleteAccount(accountId: string): Promise<Account> {
    return this.prisma.account.delete({
      where: {
        id: accountId,
      },
    });
  }
}
