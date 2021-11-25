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
exports.EditarUsuario = exports.CriarUsuario = exports.Login = exports.Usuario = void 0;
const TipoUsuario_1 = require("./TipoUsuario");
const type_graphql_1 = require("type-graphql");
let Usuario = class Usuario {
};
__decorate([
    (0, type_graphql_1.Field)((type) => type_graphql_1.ID),
    __metadata("design:type", String)
], Usuario.prototype, "cpf", void 0);
__decorate([
    (0, type_graphql_1.Field)((type) => String),
    __metadata("design:type", String)
], Usuario.prototype, "senha", void 0);
__decorate([
    (0, type_graphql_1.Field)((type) => String),
    __metadata("design:type", String)
], Usuario.prototype, "nome", void 0);
__decorate([
    (0, type_graphql_1.Field)((type) => String),
    __metadata("design:type", String)
], Usuario.prototype, "rg", void 0);
__decorate([
    (0, type_graphql_1.Field)((type) => String),
    __metadata("design:type", String)
], Usuario.prototype, "celular", void 0);
__decorate([
    (0, type_graphql_1.Field)((type) => Date),
    __metadata("design:type", Date)
], Usuario.prototype, "dataNascimento", void 0);
__decorate([
    (0, type_graphql_1.Field)((type) => TipoUsuario_1.TipoUsuario),
    __metadata("design:type", TipoUsuario_1.TipoUsuario)
], Usuario.prototype, "tipoUsuario", void 0);
Usuario = __decorate([
    (0, type_graphql_1.ObjectType)()
], Usuario);
exports.Usuario = Usuario;
let Login = class Login {
};
__decorate([
    (0, type_graphql_1.Field)((type) => String),
    __metadata("design:type", String)
], Login.prototype, "token", void 0);
Login = __decorate([
    (0, type_graphql_1.ObjectType)()
], Login);
exports.Login = Login;
let CriarUsuario = class CriarUsuario {
};
__decorate([
    (0, type_graphql_1.Field)((type) => type_graphql_1.ID),
    __metadata("design:type", String)
], CriarUsuario.prototype, "cpf", void 0);
__decorate([
    (0, type_graphql_1.Field)((type) => String),
    __metadata("design:type", String)
], CriarUsuario.prototype, "senha", void 0);
__decorate([
    (0, type_graphql_1.Field)((type) => String),
    __metadata("design:type", String)
], CriarUsuario.prototype, "nome", void 0);
__decorate([
    (0, type_graphql_1.Field)((type) => String),
    __metadata("design:type", String)
], CriarUsuario.prototype, "rg", void 0);
__decorate([
    (0, type_graphql_1.Field)((type) => String),
    __metadata("design:type", String)
], CriarUsuario.prototype, "celular", void 0);
__decorate([
    (0, type_graphql_1.Field)((type) => Date),
    __metadata("design:type", Date)
], CriarUsuario.prototype, "dataNascimento", void 0);
__decorate([
    (0, type_graphql_1.Field)((type) => type_graphql_1.Int),
    __metadata("design:type", Number)
], CriarUsuario.prototype, "tipoUsuario", void 0);
CriarUsuario = __decorate([
    (0, type_graphql_1.InputType)()
], CriarUsuario);
exports.CriarUsuario = CriarUsuario;
let EditarUsuario = class EditarUsuario {
};
__decorate([
    (0, type_graphql_1.Field)((type) => type_graphql_1.ID, { nullable: true }),
    __metadata("design:type", String)
], EditarUsuario.prototype, "cpf", void 0);
__decorate([
    (0, type_graphql_1.Field)((type) => String, { nullable: true }),
    __metadata("design:type", String)
], EditarUsuario.prototype, "senha", void 0);
__decorate([
    (0, type_graphql_1.Field)((type) => String, { nullable: true }),
    __metadata("design:type", String)
], EditarUsuario.prototype, "nome", void 0);
__decorate([
    (0, type_graphql_1.Field)((type) => String, { nullable: true }),
    __metadata("design:type", String)
], EditarUsuario.prototype, "rg", void 0);
__decorate([
    (0, type_graphql_1.Field)((type) => String, { nullable: true }),
    __metadata("design:type", String)
], EditarUsuario.prototype, "celular", void 0);
__decorate([
    (0, type_graphql_1.Field)((type) => Date, { nullable: true }),
    __metadata("design:type", Date)
], EditarUsuario.prototype, "dataNascimento", void 0);
__decorate([
    (0, type_graphql_1.Field)((type) => type_graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], EditarUsuario.prototype, "tipoUsuario", void 0);
EditarUsuario = __decorate([
    (0, type_graphql_1.InputType)()
], EditarUsuario);
exports.EditarUsuario = EditarUsuario;
