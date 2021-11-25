import { PrismaClient } from '@prisma/client';
export interface TContext {
    requestId: string;
    prisma: PrismaClient;
    req: any;
    container: any;
}
export declare type Context = TContext;
export declare function createContext(req: any): TContext;
