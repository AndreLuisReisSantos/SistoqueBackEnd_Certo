import { Prisma } from '@prisma/client';
import { Context } from '../context';
export declare class ProdutoService {
    private readonly context;
    constructor(context: Context);
    getAll(): Promise<import(".prisma/client").Produto[]>;
    create(produto: Prisma.ProdutoCreateInput): Promise<import(".prisma/client").Produto>;
    editar(produtoId: number, produto: Prisma.ProdutoUpdateInput): Promise<import(".prisma/client").Produto>;
    deletar(produtoId: number): Promise<import(".prisma/client").Produto>;
}
