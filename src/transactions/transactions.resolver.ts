import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { TransactionsService } from "./transactions.service";
import { CreateTransactionInput } from "./dto/create-transaction.input";
import { Transaction } from "./entities/transaction.entity";

@Resolver(() => Transaction)
export class TransactionsResolver {
  constructor(private transactionService: TransactionsService) {}

  @Query(() => Transaction)
  getTransaction(@Args("id") id: string) {
    return this.transactionService.getTransaction(id);
  }

  @Mutation(() => Transaction)
  createTransaction(@Args("input") input: CreateTransactionInput) {
    return this.transactionService.createTransaction(input);
  }
}
