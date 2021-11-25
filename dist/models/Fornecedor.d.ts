import { Representante } from './Representante';
export declare class Fornecedor {
    id: number;
    razaoSocial: string;
    cnpj: string;
    email: string;
    telefone: string;
    nomeFantasia: string;
    site: string;
    celular: string;
    cep: string;
    logradouro: string;
    numero: string;
    complemento: string;
    bairro: string;
    cidade: string;
    estado: string;
    Representante: Representante;
}
export declare class CriarFornecedor {
    razaoSocial: string;
    cnpj: string;
    email: string;
    telefone: string;
    nomeFantasia: string;
    site: string;
    celular: string;
    cep: string;
    logradouro: string;
    numero: string;
    complemento: string;
    bairro: string;
    cidade: string;
    estado: string;
}
export declare class EditarFornecedor {
    razaoSocial: string;
    cnpj: string;
    email: string;
    telefone: string;
    nomeFantasia: string;
    site: string;
    celular: string;
    cep: string;
    logradouro: string;
    numero: string;
    complemento: string;
    bairro: string;
    cidade: string;
    estado: string;
    representanteId: number;
}
