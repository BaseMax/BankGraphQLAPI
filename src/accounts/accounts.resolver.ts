import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { AccountsService } from "./accounts.service";
import { Account } from "./entities/account.entity";
import { CreateAccountInput } from "./dto/create-account.input";
import { UpdateAccountInput } from "./dto/update-account.input";

@Resolver(() => Account)
export class AccountsResolver {
  constructor(private readonly accountService: AccountsService) {}

  @Mutation(() => Account)
  createAccount(@Args("input") input: CreateAccountInput) {
    return this.accountService.createAccount(input);
  }

  @Query(() => [Account])
  getAllAccounts(@Args("clientId") clientId: string) {
    return this.accountService.getAllAccounts(clientId);
  }

  @Query(() => Account)
  getAccount(@Args("id") id: string) {
    return this.accountService.getAccount(id);
  }

  @Mutation(() => Account)
  updateAccount(@Args("input") input: UpdateAccountInput) {
    return this.accountService.updateAccount(input);
  }

  @Mutation(() => Account)
  deleteAccount(@Args("id") id: string) {
    return this.accountService.deleteAccount(id);
  }
}
