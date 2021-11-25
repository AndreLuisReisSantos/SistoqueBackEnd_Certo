import { Prisma } from '@prisma/client';
import { Context } from '../context';
export declare class RepresentanteService {
    private readonly context;
    constructor(context: Context);
    getAll(): Promise<import(".prisma/client").Representante[]>;
    getById(id: number): Promise<import(".prisma/client").Representante>;
    create(represante: Prisma.RepresentanteCreateInput): Promise<import(".prisma/client").Representante>;
}
