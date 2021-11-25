import { CriarUsuario, EditarUsuario } from '@models/Usuario';
import { UsuarioService } from '@services/UsuarioService';
export declare class UsuarioController {
    private readonly usuarioService;
    constructor(usuarioService: UsuarioService);
    todosUsuarios(): Promise<(import(".prisma/client").Usuario & {
        tipoUsuario: import(".prisma/client").TipoUsuario;
    })[]>;
    criarUsuario(usuario: CriarUsuario): Promise<import(".prisma/client").Usuario>;
    editarUsuario(usuarioId: string, usuario: EditarUsuario): Promise<import(".prisma/client").Usuario>;
    deletarUsuario(usuarioId: string): Promise<import(".prisma/client").Usuario>;
    login(cpf: string, senha: string): Promise<{
        token: string;
    }>;
}
