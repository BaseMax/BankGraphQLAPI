import { Resolver, Query, Mutation, Args, Int } from "@nestjs/graphql";
import { AccountsService } from "./accounts.service";
import { Account } from "./entities/account.entity";
import { CreateAccountInput } from "./dto/create-account.input";
import { UpdateAccountInput } from "./dto/update-account.input";

@Resolver(() => Account)
export class AccountsResolver {
  constructor(private readonly accountService: AccountsService) {}

  @Mutation(() => Account)
  async createAccount(@Args("input") input: CreateAccountInput){
    return this.accountService.createAccount(input);
  }

  @Query(() => [Account])
  async getAllAccounts(@Args("nationalIdCode") nationalIdCode: string) {
    return this.accountService.getAllAccounts(nationalIdCode);
  }

  @Query(() => Account)
  async getAccount(@Args("accountId") accountId: string) {
    return this.accountService.getAccount(accountId);
  }

  @Mutation(() => Account)
  async updateAccount(
    @Args("accountId") accountId: string,
    @Args("input") input: UpdateAccountInput
  ) {
    return this.accountService.updateAccount(accountId, input);
  }

  @Mutation(() => Account)
  async deleteAccount(@Args("accountId") accountId: string) {
    return this.accountService.deleteAccount(accountId);
  }
}
