import { RepresentanteService } from './../services/RepresentanteService';
import { CriarRepresentante } from '@models/Representante';
export declare class RepresentanteController {
    private readonly representanteService;
    constructor(representanteService: RepresentanteService);
    todosRepresentantes(): Promise<import(".prisma/client").Representante[]>;
    criarRepresentante(representante: CriarRepresentante): Promise<import(".prisma/client").Representante>;
}
