import { TipoUsuario } from './TipoUsuario';
export declare class Usuario {
    cpf: string;
    senha: string;
    nome: string;
    rg: string;
    celular: string;
    dataNascimento: Date;
    tipoUsuario: TipoUsuario;
}
export declare class Login {
    token: string;
}
export declare class CriarUsuario {
    cpf: string;
    senha: string;
    nome: string;
    rg: string;
    celular: string;
    dataNascimento: Date;
    tipoUsuario: number;
}
export declare class EditarUsuario {
    cpf: string;
    senha: string;
    nome: string;
    rg: string;
    celular: string;
    dataNascimento: Date;
    tipoUsuario: number;
}
