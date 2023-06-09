import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { join } from "path";
import { ApolloServerPluginLandingPageLocalDefault } from "@apollo/server/plugin/landingPage/default";
import { ConfigModule } from "@nestjs/config";
import { ClientsModule } from "./clients/clients.module";
import { NationalIDScalar } from "./national-id.scalar";
import { AccountsModule } from "./accounts/accounts.module";
import { BranchesModule } from "./branches/branches.module";
import { TransactionsModule } from "./transactions/transactions.module";
import { EmployeesModule } from "./employees/employees.module";

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), "src/schema.gql"),
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
    }),
    ConfigModule.forRoot({ isGlobal: true }),
    ClientsModule,
    AccountsModule,
    BranchesModule,
    TransactionsModule,
    EmployeesModule,
  ],
  controllers: [AppController],
  providers: [AppService, NationalIDScalar],
})
export class AppModule {}
