"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FornecedorController = void 0;
const typedi_1 = require("typedi");
const type_graphql_1 = require("type-graphql");
const Fornecedor_1 = require("@models/Fornecedor");
const FornecedorService_1 = require("@services/FornecedorService");
const apollo_server_1 = require("apollo-server");
const RepresentanteService_1 = require("./../services/RepresentanteService");
let FornecedorController = class FornecedorController {
    constructor(fornecedorService, representanteService) {
        this.fornecedorService = fornecedorService;
        this.representanteService = representanteService;
    }
    async todosFornecedores() {
        console.log(await this.fornecedorService.getAll());
        return await this.fornecedorService.getAll();
    }
    async deletarFornecedor(fornecedorId) {
        const fornecedor = await this.fornecedorService.getBy({ id: fornecedorId });
        if (!fornecedor[0].id) {
            throw new apollo_server_1.ApolloError('Não foi encontrado esse fornecedor', 'FORNECEDOR_NOT_FOUND');
        }
        return await this.fornecedorService.deletar(fornecedorId);
    }
    async editarFornecedor(fornecedorId, fornecedor) {
        const oldFornecedor = await this.fornecedorService.getBy({ id: fornecedorId });
        if (!oldFornecedor[0].id) {
            throw new apollo_server_1.ApolloError('Não foi encontrado esse fornecedor', 'FORNECEDOR_NOT_FOUND');
        }
        if (fornecedor.cnpj && oldFornecedor[0].cnpj !== fornecedor.cnpj && await this.fornecedorService.getBy({ cnpj: fornecedor.cnpj })) {
            throw new apollo_server_1.ApolloError('Já existe um fornecedor com esse cnpj cadastrado', 'FORNECEDOR_FOUND');
        }
        return await this.fornecedorService.editar(fornecedorId, fornecedor);
    }
    async criarFornecedor(fornecedor, representanteId) {
        if ((await this.fornecedorService.getBy({ cnpj: fornecedor.cnpj })).length > 0) {
            throw new apollo_server_1.ApolloError('Já existe um fornecedor com esse cnpj cadastrado', 'FORNECEDOR_FOUND');
        }
        if (!representanteId) {
            throw new apollo_server_1.ApolloError('Informe o representante desse fornecedor', 'REPRESENTANTE_NOT_FOUND');
        }
        if (!await this.representanteService.getById(representanteId)) {
            throw new apollo_server_1.ApolloError('Representante não encontrado', 'REPRESENTANTE_NOT_FOUND');
        }
        return await this.fornecedorService.create({
            ...fornecedor,
            Representante: {
                connect: {
                    id: representanteId
                }
            }
        });
    }
};
__decorate([
    (0, type_graphql_1.Query)((returns) => [Fornecedor_1.Fornecedor]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FornecedorController.prototype, "todosFornecedores", null);
__decorate([
    (0, type_graphql_1.Mutation)((returns) => Fornecedor_1.Fornecedor),
    __param(0, (0, type_graphql_1.Arg)('fornecedorId', (type) => type_graphql_1.Int)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], FornecedorController.prototype, "deletarFornecedor", null);
__decorate([
    (0, type_graphql_1.Mutation)((returns) => Fornecedor_1.Fornecedor),
    __param(0, (0, type_graphql_1.Arg)('fornecedorId', (type) => type_graphql_1.Int)),
    __param(1, (0, type_graphql_1.Arg)('fornecedor')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Fornecedor_1.EditarFornecedor]),
    __metadata("design:returntype", Promise)
], FornecedorController.prototype, "editarFornecedor", null);
__decorate([
    (0, type_graphql_1.Mutation)((returns) => Fornecedor_1.Fornecedor),
    __param(0, (0, type_graphql_1.Arg)('fornecedor')),
    __param(1, (0, type_graphql_1.Arg)('representanteId', (type) => type_graphql_1.Int)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Fornecedor_1.CriarFornecedor, Number]),
    __metadata("design:returntype", Promise)
], FornecedorController.prototype, "criarFornecedor", null);
FornecedorController = __decorate([
    (0, typedi_1.Service)(),
    (0, type_graphql_1.Resolver)(Fornecedor_1.Fornecedor),
    __param(0, (0, typedi_1.Inject)('FornecedorService')),
    __param(1, (0, typedi_1.Inject)('RepresentanteService')),
    __metadata("design:paramtypes", [FornecedorService_1.FornecedorService,
        RepresentanteService_1.RepresentanteService])
], FornecedorController);
exports.FornecedorController = FornecedorController;
