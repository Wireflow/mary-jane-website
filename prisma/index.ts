import { PrismaClient } from "@prisma/client";


declare global {
  var catchedPrisma: PrismaClient;
}

export let db: PrismaClient;
if (process.env.NODE_ENV === "production") {
  db = new PrismaClient();
} else {
  if (!global.catchedPrisma) {
    global.catchedPrisma = new PrismaClient();
  }
  db = global.catchedPrisma;
}
