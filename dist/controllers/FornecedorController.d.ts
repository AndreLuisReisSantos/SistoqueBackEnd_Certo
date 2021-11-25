import { CriarFornecedor, EditarFornecedor } from '@models/Fornecedor';
import { FornecedorService } from '@services/FornecedorService';
import { RepresentanteService } from './../services/RepresentanteService';
export declare class FornecedorController {
    private readonly fornecedorService;
    private readonly representanteService;
    constructor(fornecedorService: FornecedorService, representanteService: RepresentanteService);
    todosFornecedores(): Promise<(import(".prisma/client").Fornecedor & {
        Representante: import(".prisma/client").Representante;
    })[]>;
    deletarFornecedor(fornecedorId: number): Promise<import(".prisma/client").Fornecedor>;
    editarFornecedor(fornecedorId: number, fornecedor: EditarFornecedor): Promise<import(".prisma/client").Fornecedor>;
    criarFornecedor(fornecedor: CriarFornecedor, representanteId: number): Promise<import(".prisma/client").Fornecedor>;
}
