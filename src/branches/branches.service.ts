import { Injectable } from "@nestjs/common";
import { CreateBranchInput } from "./dto/create-branch.input";
import { UpdateBranchInput } from "./dto/update-branch.input";
import { PrismaService } from "src/prisma/prisma.service";
import { Branch } from "@prisma/client";

@Injectable()
export class BranchesService {
  constructor(private readonly prisma: PrismaService) {}

  async createBranch(input: CreateBranchInput): Promise<Branch> {
    return await this.prisma.branch.create({
      data: input,
    });
  }

  async getAllBranches(): Promise<Branch[]> {
    return await this.prisma.branch.findMany({
      include: {
        employees: true,
      },
    });
  }

  async getBranch(id: string): Promise<Branch> {
    return await this.prisma.branch.findUnique({
      where: {
        id,
      },
      include: {
        employees: true,
      },
    });
  }

  async updateBranch(input: UpdateBranchInput) {
    return await this.prisma.branch.update({ where: { id: input.id }, data: input });
  }

  async deleteBranch(id: string): Promise<Branch> {
    return await this.prisma.branch.delete({
      where: {
        id,
      },
    });
  }
}
