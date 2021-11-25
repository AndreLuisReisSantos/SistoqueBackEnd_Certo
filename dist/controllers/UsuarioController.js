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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioController = void 0;
const typedi_1 = require("typedi");
const type_graphql_1 = require("type-graphql");
const apollo_server_1 = require("apollo-server");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const Usuario_1 = require("@models/Usuario");
const UsuarioService_1 = require("@services/UsuarioService");
let UsuarioController = class UsuarioController {
    constructor(usuarioService) {
        this.usuarioService = usuarioService;
    }
    async todosUsuarios() {
        return await this.usuarioService.getAll();
    }
    async criarUsuario(usuario) {
        if (await this.usuarioService.getById(usuario.cpf)) {
            throw new apollo_server_1.ApolloError('Esse cpf já foi cadastrado', 'USER_FOUND');
        }
        const salt = bcrypt_1.default.genSaltSync(8);
        const hash = bcrypt_1.default.hashSync(usuario.senha, salt);
        return await this.usuarioService.create({
            ...usuario,
            senha: hash,
            tipoUsuario: {
                connect: {
                    id: usuario.tipoUsuario
                }
            }
        });
    }
    async editarUsuario(usuarioId, usuario) {
        const oldInfo = await this.usuarioService.getById(usuarioId);
        if (!oldInfo) {
            throw new apollo_server_1.ApolloError('Usuário não encontrado', 'USER_NOT_FOUND');
        }
        if (usuario.senha) {
            const salt = bcrypt_1.default.genSaltSync(8);
            const hash = bcrypt_1.default.hashSync(usuario.senha, salt);
            usuario.senha = hash;
        }
        return await this.usuarioService.editar(usuarioId, {
            ...usuario,
            tipoUsuario: {
                connect: {
                    id: usuario.tipoUsuario || oldInfo.tipoUsuario.id
                }
            }
        });
    }
    async deletarUsuario(usuarioId) {
        return await this.usuarioService.deletar(usuarioId);
    }
    async login(cpf, senha) {
        const user = await this.usuarioService.getById(cpf);
        if (!user) {
            throw new apollo_server_1.ApolloError('Usuário não encontrado', 'USER_NOT_FOUND');
        }
        const verificarSenha = bcrypt_1.default.compare(senha, user.senha);
        if (!verificarSenha) {
            throw new apollo_server_1.ApolloError('Usuário não encontrado', 'USER_NOT_FOUND');
        }
        return {
            token: jsonwebtoken_1.default.sign({
                userId: user.cpf
            }, process.env.SECRET_JWT, { expiresIn: '2days' })
        };
    }
};
__decorate([
    (0, type_graphql_1.Query)((returns) => [Usuario_1.Usuario]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsuarioController.prototype, "todosUsuarios", null);
__decorate([
    (0, type_graphql_1.Mutation)((returns) => Usuario_1.Usuario),
    __param(0, (0, type_graphql_1.Arg)('usuario')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Usuario_1.CriarUsuario]),
    __metadata("design:returntype", Promise)
], UsuarioController.prototype, "criarUsuario", null);
__decorate([
    (0, type_graphql_1.Mutation)((returns) => Usuario_1.Usuario),
    __param(0, (0, type_graphql_1.Arg)('usuarioId', (type) => String)),
    __param(1, (0, type_graphql_1.Arg)('usuario')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Usuario_1.EditarUsuario]),
    __metadata("design:returntype", Promise)
], UsuarioController.prototype, "editarUsuario", null);
__decorate([
    (0, type_graphql_1.Mutation)((returns) => Usuario_1.Usuario),
    __param(0, (0, type_graphql_1.Arg)('usuarioId', (type) => String)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsuarioController.prototype, "deletarUsuario", null);
__decorate([
    (0, type_graphql_1.Mutation)((returns) => Usuario_1.Login),
    __param(0, (0, type_graphql_1.Arg)('cpf', (type) => String)),
    __param(1, (0, type_graphql_1.Arg)('senha', (type) => String)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], UsuarioController.prototype, "login", null);
UsuarioController = __decorate([
    (0, typedi_1.Service)(),
    (0, type_graphql_1.Resolver)(Usuario_1.Usuario),
    __param(0, (0, typedi_1.Inject)('UsuarioService')),
    __metadata("design:paramtypes", [UsuarioService_1.UsuarioService])
], UsuarioController);
exports.UsuarioController = UsuarioController;
