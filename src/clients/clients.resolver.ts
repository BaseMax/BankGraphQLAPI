import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from "@nestjs/graphql";
import { ClientsService } from "./clients.service";
import { CreateClientInput } from "./dto/create-client.input";
import { UpdateClientInput } from "./dto/update-client.input";
import { Client } from "./entities/client.entity";
import { Account } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";
// import { NationalIDScalar } from "src/national-id.scalar";

@Resolver(() => Client)
export class ClientsResolver {
  constructor(
    private readonly clientService: ClientsService,
    private readonly prisma: PrismaService
  ) {}

  @Mutation(() => Client)
  async createClient(@Args("input") input: CreateClientInput): Promise<Client> {
    return this.clientService.createClient(input);
  }

  @Query(() => [Client])
  async getAllClients(): Promise<Client[]> {
    return this.clientService.getAllClients();
  }

  @Query(() => Client)
  async getClient(
    @Args("nationalIdCode") nationalIdCode: string
  ): Promise<Client> {
    return this.clientService.getClientByNationalIdCode(nationalIdCode);
  }

  @Mutation(() => Client)
  async updateClient(
    @Args("nationalIdCode") nationalIdCode: string,
    @Args("input") input: UpdateClientInput
  ): Promise<Client> {
    return this.clientService.updateClient(nationalIdCode, input);
  }

  @Mutation(() => Client)
  async deleteClient(
    @Args("nationalIdCode") nationalIdCode: string
  ): Promise<Client> {
    return this.clientService.deleteClient(nationalIdCode);
  }
}
