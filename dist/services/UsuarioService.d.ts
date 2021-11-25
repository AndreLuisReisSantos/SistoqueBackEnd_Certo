import { Prisma } from '@prisma/client';
import { Context } from '../context';
export declare class UsuarioService {
    private readonly context;
    constructor(context: Context);
    getAll(): Promise<(import(".prisma/client").Usuario & {
        tipoUsuario: import(".prisma/client").TipoUsuario;
    })[]>;
    getById(cpf: string): Promise<import(".prisma/client").Usuario & {
        tipoUsuario: import(".prisma/client").TipoUsuario;
    }>;
    create(usuario: Prisma.UsuarioCreateInput): Promise<import(".prisma/client").Usuario>;
    editar(usuarioId: string, usuario: Prisma.UsuarioUpdateInput): Promise<import(".prisma/client").Usuario>;
    deletar(usuarioId: string): Promise<import(".prisma/client").Usuario>;
}
