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
exports.RepresentanteController = void 0;
const typedi_1 = require("typedi");
const type_graphql_1 = require("type-graphql");
const RepresentanteService_1 = require("./../services/RepresentanteService");
const Representante_1 = require("@models/Representante");
let RepresentanteController = class RepresentanteController {
    constructor(representanteService) {
        this.representanteService = representanteService;
    }
    async todosRepresentantes() {
        return await this.representanteService.getAll();
    }
    async criarRepresentante(representante) {
        return await this.representanteService.create({
            ...representante
        });
    }
};
__decorate([
    (0, type_graphql_1.Query)((returns) => [Representante_1.Representante]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RepresentanteController.prototype, "todosRepresentantes", null);
__decorate([
    (0, type_graphql_1.Mutation)((returns) => Representante_1.Representante),
    __param(0, (0, type_graphql_1.Arg)('representante')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Representante_1.CriarRepresentante]),
    __metadata("design:returntype", Promise)
], RepresentanteController.prototype, "criarRepresentante", null);
RepresentanteController = __decorate([
    (0, typedi_1.Service)(),
    (0, type_graphql_1.Resolver)(Representante_1.Representante),
    __param(0, (0, typedi_1.Inject)('RepresentanteService')),
    __metadata("design:paramtypes", [RepresentanteService_1.RepresentanteService])
], RepresentanteController);
exports.RepresentanteController = RepresentanteController;
