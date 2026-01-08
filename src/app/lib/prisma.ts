/* eslint-disable no-var */
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../../../generated/prisma/client";

declare global {
  // eslint-disable-next-line no-unused-vars
  var cachedAdapter: PrismaPg;
  var cachedPrisma: PrismaClient;
}

let adapter = new PrismaPg({ connectionString: `${process.env.DATABASE_URL}` });
let prisma: PrismaClient;

if (process.env.NODE_ENV === "production") {
  adapter = new PrismaPg({ connectionString: `${process.env.DATABASE_URL}` });
  prisma = new PrismaClient({ adapter });
} else {
  if (!global.cachedPrisma) {
    global.cachedAdapter = new PrismaPg({
      connectionString: `${process.env.DATABASE_URL}`,
    });
    global.cachedPrisma = new PrismaClient({ adapter });
  }
  prisma = global.cachedPrisma;
}

export const db = prisma;
