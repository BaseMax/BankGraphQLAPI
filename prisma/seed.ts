import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const client = await prisma.client.create({
    data: {
      nationalIdCode: "1234567890",
      firstName: "John",
      lastName: "Doe",
      email: "johndoe@gmail.com",
    },
  });
  console.log(client);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
