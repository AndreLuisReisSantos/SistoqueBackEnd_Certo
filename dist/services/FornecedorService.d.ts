import { Prisma } from '@prisma/client';
import { Context } from '../context';
export declare class FornecedorService {
    private readonly context;
    constructor(context: Context);
    getBy(params: Prisma.FornecedorWhereInput): Promise<import(".prisma/client").Fornecedor[]>;
    getAll(): Promise<(import(".prisma/client").Fornecedor & {
        Representante: import(".prisma/client").Representante;
    })[]>;
    create(fornecedor: Prisma.FornecedorCreateInput): Promise<import(".prisma/client").Fornecedor>;
    editar(fornecedorId: number, fornecedor: Prisma.FornecedorUpdateInput): Promise<import(".prisma/client").Fornecedor>;
    deletar(fornecedorId: number): Promise<import(".prisma/client").Fornecedor>;
}
