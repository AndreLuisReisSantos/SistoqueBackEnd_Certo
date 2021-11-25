import { CriarProduto, EditarProduto } from '@models/Produto';
import { ProdutoService } from '@services/ProdutoService';
export declare class ProdutoController {
    private readonly produtoService;
    constructor(produtoService: ProdutoService);
    todosProdutos(): Promise<import(".prisma/client").Produto[]>;
    criarProduto(produto: CriarProduto): Promise<import(".prisma/client").Produto>;
    editarProduto(produtoId: number, produto: EditarProduto): Promise<import(".prisma/client").Produto>;
    deletarProduto(produtoId: number): Promise<import(".prisma/client").Produto>;
}
