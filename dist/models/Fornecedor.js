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
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditarFornecedor = exports.CriarFornecedor = exports.Fornecedor = void 0;
const type_graphql_1 = require("type-graphql");
const Representante_1 = require("./Representante");
let Fornecedor = class Fornecedor {
};
__decorate([
    (0, type_graphql_1.Field)((type) => type_graphql_1.ID),
    __metadata("design:type", Number)
], Fornecedor.prototype, "id", void 0);
__decorate([
    (0, type_graphql_1.Field)((type) => String),
    __metadata("design:type", String)
], Fornecedor.prototype, "razaoSocial", void 0);
__decorate([
    (0, type_graphql_1.Field)((type) => String),
    __metadata("design:type", String)
], Fornecedor.prototype, "cnpj", void 0);
__decorate([
    (0, type_graphql_1.Field)((type) => String, { nullable: true }),
    __metadata("design:type", String)
], Fornecedor.prototype, "email", void 0);
__decorate([
    (0, type_graphql_1.Field)((type) => String, { nullable: true }),
    __metadata("design:type", String)
], Fornecedor.prototype, "telefone", void 0);
__decorate([
    (0, type_graphql_1.Field)((type) => String, { nullable: true }),
    __metadata("design:type", String)
], Fornecedor.prototype, "nomeFantasia", void 0);
__decorate([
    (0, type_graphql_1.Field)((type) => String, { nullable: true }),
    __metadata("design:type", String)
], Fornecedor.prototype, "site", void 0);
__decorate([
    (0, type_graphql_1.Field)((type) => String),
    __metadata("design:type", String)
], Fornecedor.prototype, "celular", void 0);
__decorate([
    (0, type_graphql_1.Field)((type) => String),
    __metadata("design:type", String)
], Fornecedor.prototype, "cep", void 0);
__decorate([
    (0, type_graphql_1.Field)((type) => String),
    __metadata("design:type", String)
], Fornecedor.prototype, "logradouro", void 0);
__decorate([
    (0, type_graphql_1.Field)((type) => String),
    __metadata("design:type", String)
], Fornecedor.prototype, "numero", void 0);
__decorate([
    (0, type_graphql_1.Field)((type) => String, { nullable: true }),
    __metadata("design:type", String)
], Fornecedor.prototype, "complemento", void 0);
__decorate([
    (0, type_graphql_1.Field)((type) => String),
    __metadata("design:type", String)
], Fornecedor.prototype, "bairro", void 0);
__decorate([
    (0, type_graphql_1.Field)((type) => String),
    __metadata("design:type", String)
], Fornecedor.prototype, "cidade", void 0);
__decorate([
    (0, type_graphql_1.Field)((type) => String),
    __metadata("design:type", String)
], Fornecedor.prototype, "estado", void 0);
__decorate([
    (0, type_graphql_1.Field)((type) => Representante_1.Representante, { nullable: true }),
    __metadata("design:type", Representante_1.Representante)
], Fornecedor.prototype, "Representante", void 0);
Fornecedor = __decorate([
    (0, type_graphql_1.ObjectType)()
], Fornecedor);
exports.Fornecedor = Fornecedor;
let CriarFornecedor = class CriarFornecedor {
};
__decorate([
    (0, type_graphql_1.Field)((type) => String),
    __metadata("design:type", String)
], CriarFornecedor.prototype, "razaoSocial", void 0);
__decorate([
    (0, type_graphql_1.Field)((type) => String),
    __metadata("design:type", String)
], CriarFornecedor.prototype, "cnpj", void 0);
__decorate([
    (0, type_graphql_1.Field)((type) => String, { nullable: true }),
    __metadata("design:type", String)
], CriarFornecedor.prototype, "email", void 0);
__decorate([
    (0, type_graphql_1.Field)((type) => String, { nullable: true }),
    __metadata("design:type", String)
], CriarFornecedor.prototype, "telefone", void 0);
__decorate([
    (0, type_graphql_1.Field)((type) => String, { nullable: true }),
    __metadata("design:type", String)
], CriarFornecedor.prototype, "nomeFantasia", void 0);
__decorate([
    (0, type_graphql_1.Field)((type) => String, { nullable: true }),
    __metadata("design:type", String)
], CriarFornecedor.prototype, "site", void 0);
__decorate([
    (0, type_graphql_1.Field)((type) => String, { nullable: true }),
    __metadata("design:type", String)
], CriarFornecedor.prototype, "celular", void 0);
__decorate([
    (0, type_graphql_1.Field)((type) => String),
    __metadata("design:type", String)
], CriarFornecedor.prototype, "cep", void 0);
__decorate([
    (0, type_graphql_1.Field)((type) => String),
    __metadata("design:type", String)
], CriarFornecedor.prototype, "logradouro", void 0);
__decorate([
    (0, type_graphql_1.Field)((type) => String),
    __metadata("design:type", String)
], CriarFornecedor.prototype, "numero", void 0);
__decorate([
    (0, type_graphql_1.Field)((type) => String, { nullable: true }),
    __metadata("design:type", String)
], CriarFornecedor.prototype, "complemento", void 0);
__decorate([
    (0, type_graphql_1.Field)((type) => String),
    __metadata("design:type", String)
], CriarFornecedor.prototype, "bairro", void 0);
__decorate([
    (0, type_graphql_1.Field)((type) => String),
    __metadata("design:type", String)
], CriarFornecedor.prototype, "cidade", void 0);
__decorate([
    (0, type_graphql_1.Field)((type) => String),
    __metadata("design:type", String)
], CriarFornecedor.prototype, "estado", void 0);
CriarFornecedor = __decorate([
    (0, type_graphql_1.InputType)()
], CriarFornecedor);
exports.CriarFornecedor = CriarFornecedor;
let EditarFornecedor = class EditarFornecedor {
};
__decorate([
    (0, type_graphql_1.Field)((type) => String, { nullable: true }),
    __metadata("design:type", String)
], EditarFornecedor.prototype, "razaoSocial", void 0);
__decorate([
    (0, type_graphql_1.Field)((type) => String, { nullable: true }),
    __metadata("design:type", String)
], EditarFornecedor.prototype, "cnpj", void 0);
__decorate([
    (0, type_graphql_1.Field)((type) => String, { nullable: true }),
    __metadata("design:type", String)
], EditarFornecedor.prototype, "email", void 0);
__decorate([
    (0, type_graphql_1.Field)((type) => String, { nullable: true }),
    __metadata("design:type", String)
], EditarFornecedor.prototype, "telefone", void 0);
__decorate([
    (0, type_graphql_1.Field)((type) => String, { nullable: true }),
    __metadata("design:type", String)
], EditarFornecedor.prototype, "nomeFantasia", void 0);
__decorate([
    (0, type_graphql_1.Field)((type) => String, { nullable: true }),
    __metadata("design:type", String)
], EditarFornecedor.prototype, "site", void 0);
__decorate([
    (0, type_graphql_1.Field)((type) => String, { nullable: true }),
    __metadata("design:type", String)
], EditarFornecedor.prototype, "celular", void 0);
__decorate([
    (0, type_graphql_1.Field)((type) => String, { nullable: true }),
    __metadata("design:type", String)
], EditarFornecedor.prototype, "cep", void 0);
__decorate([
    (0, type_graphql_1.Field)((type) => String, { nullable: true }),
    __metadata("design:type", String)
], EditarFornecedor.prototype, "logradouro", void 0);
__decorate([
    (0, type_graphql_1.Field)((type) => String, { nullable: true }),
    __metadata("design:type", String)
], EditarFornecedor.prototype, "numero", void 0);
__decorate([
    (0, type_graphql_1.Field)((type) => String, { nullable: true }),
    __metadata("design:type", String)
], EditarFornecedor.prototype, "complemento", void 0);
__decorate([
    (0, type_graphql_1.Field)((type) => String, { nullable: true }),
    __metadata("design:type", String)
], EditarFornecedor.prototype, "bairro", void 0);
__decorate([
    (0, type_graphql_1.Field)((type) => String, { nullable: true }),
    __metadata("design:type", String)
], EditarFornecedor.prototype, "cidade", void 0);
__decorate([
    (0, type_graphql_1.Field)((type) => String, { nullable: true }),
    __metadata("design:type", String)
], EditarFornecedor.prototype, "estado", void 0);
__decorate([
    (0, type_graphql_1.Field)((type) => type_graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], EditarFornecedor.prototype, "representanteId", void 0);
EditarFornecedor = __decorate([
    (0, type_graphql_1.InputType)()
], EditarFornecedor);
exports.EditarFornecedor = EditarFornecedor;
