import { Injectable } from "@nestjs/common";
import { CreateTransactionInput } from "./dto/create-transaction.input";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class TransactionsService {
  constructor(private prisma: PrismaService) {}

  async createTransaction(input: CreateTransactionInput) {
    const { amount, senderId, receiverId } = input;

    return this.prisma.$transaction(async (prisma) => {
      const sender = await prisma.account.findUnique({
        where: { id: senderId },
      });
      if (!sender || sender.balance < amount) {
        throw new Error("Insufficient funds");
      }

      await prisma.account.update({
        where: { id: senderId },
        data: { balance: sender.balance - amount },
      });
      await prisma.account.update({
        where: { id: receiverId },
        data: { balance: { increment: amount } },
      });

      return prisma.transaction.create({
        data: { amount, senderId, receiverId },
      });
    });
  }

  getTransaction(id: string) {
    return this.prisma.transaction.findUnique({
      where: { id },
      include: { sender: true, receiver: true },
    });
  }
}
