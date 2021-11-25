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
exports.ProdutoController = void 0;
const typedi_1 = require("typedi");
const type_graphql_1 = require("type-graphql");
const Produto_1 = require("@models/Produto");
const ProdutoService_1 = require("@services/ProdutoService");
let ProdutoController = class ProdutoController {
    constructor(produtoService) {
        this.produtoService = produtoService;
    }
    async todosProdutos() {
        return await this.produtoService.getAll();
    }
    async criarProduto(produto) {
        return await this.produtoService.create({
            ...produto
        });
    }
    async editarProduto(produtoId, produto) {
        return await this.produtoService.editar(produtoId, {
            ...produto
        });
    }
    async deletarProduto(produtoId) {
        return await this.produtoService.deletar(produtoId);
    }
};
__decorate([
    (0, type_graphql_1.Query)((returns) => [Produto_1.Produto]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProdutoController.prototype, "todosProdutos", null);
__decorate([
    (0, type_graphql_1.Mutation)((returns) => Produto_1.Produto),
    __param(0, (0, type_graphql_1.Arg)('produto')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Produto_1.CriarProduto]),
    __metadata("design:returntype", Promise)
], ProdutoController.prototype, "criarProduto", null);
__decorate([
    (0, type_graphql_1.Mutation)((returns) => Produto_1.Produto),
    __param(0, (0, type_graphql_1.Arg)('produtoId', (type) => type_graphql_1.Int)),
    __param(1, (0, type_graphql_1.Arg)('produto')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Produto_1.EditarProduto]),
    __metadata("design:returntype", Promise)
], ProdutoController.prototype, "editarProduto", null);
__decorate([
    (0, type_graphql_1.Mutation)((returns) => Produto_1.Produto),
    __param(0, (0, type_graphql_1.Arg)('produtoId', (type) => type_graphql_1.Int)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProdutoController.prototype, "deletarProduto", null);
ProdutoController = __decorate([
    (0, typedi_1.Service)(),
    (0, type_graphql_1.Resolver)(Produto_1.Produto),
    __param(0, (0, typedi_1.Inject)('ProdutoService')),
    __metadata("design:paramtypes", [ProdutoService_1.ProdutoService])
], ProdutoController);
exports.ProdutoController = ProdutoController;
