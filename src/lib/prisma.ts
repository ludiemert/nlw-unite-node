import { PrismaClient } from "@prisma/client";

//criar a conexao com o banco de dados:(cada query ele faz um log no banco de dados)
export const prisma = new PrismaClient({
  log: ["query"],
});