import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export interface TContext {
  requestId: string;
  prisma: PrismaClient
  req: any
  container: any
}

export type Context = TContext

export function createContext (req: any): TContext {
  return {
    ...req,
    prisma
  }
}
