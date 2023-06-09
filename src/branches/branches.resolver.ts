import { Resolver, Query, Mutation, Args, Int } from "@nestjs/graphql";
import { BranchesService } from "./branches.service";
import { CreateBranchInput } from "./dto/create-branch.input";
import { UpdateBranchInput } from "./dto/update-branch.input";
import { Branch } from "./entities/branch.entity";

@Resolver(() => Branch)
export class BranchesResolver {
  constructor(private readonly branchesService: BranchesService) {}

  @Mutation(() => Branch)
  async createBranch(@Args("input") input: CreateBranchInput) {
    return this.branchesService.createBranch(input);
  }

  @Query(() => [Branch])
  async getAllBranches() {
    return this.branchesService.getAllBranches();
  }

  @Query(() => Branch)
  async getBranch(@Args("id") id: string) {
    return this.branchesService.getBranch(id);
  }

  @Mutation(() => Branch)
  async updateBranch(@Args("input") input: UpdateBranchInput) {
    return this.branchesService.updateBranch(input);
  }

  @Mutation(() => Branch)
  async deleteBranch(@Args("id") id: string) {
    return this.branchesService.deleteBranch(id);
  }
}
