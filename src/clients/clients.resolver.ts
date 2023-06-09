import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { ClientsService } from "./clients.service";
import { CreateClientInput } from "./dto/create-client.input";
import { UpdateClientInput } from "./dto/update-client.input";
import { Client } from "./entities/client.entity";

@Resolver(() => Client)
export class ClientsResolver {
  constructor(private readonly clientService: ClientsService) {}

  @Mutation(() => Client)
  createClient(@Args("input") input: CreateClientInput) {
    return this.clientService.createClient(input);
  }

  @Query(() => [Client])
  getAllClients() {
    return this.clientService.getAllClients();
  }

  @Query(() => Client)
  getClient(@Args("nationalIdCode") nationalIdCode: string) {
    return this.clientService.getClientByNationalIdCode(nationalIdCode);
  }

  @Mutation(() => Client)
  updateClient(@Args("input") input: UpdateClientInput) {
    return this.clientService.updateClient(input);
  }

  @Mutation(() => Client)
  deleteClient(@Args("nationalIdCode") nationalIdCode: string) {
    return this.clientService.deleteClient(nationalIdCode);
  }
}
