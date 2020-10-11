import { PrismaClient } from '@prisma/client';

const log = []; // ['query', 'info', 'warn']

const db = new PrismaClient({
  log
});

export default db;
