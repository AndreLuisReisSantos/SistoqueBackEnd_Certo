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
exports.UsuarioService = void 0;
const apollo_server_1 = require("apollo-server");
const typedi_1 = require("typedi");
let UsuarioService = class UsuarioService {
    constructor(context) {
        this.context = context;
    }
    async getAll() {
        return await this.context.prisma.usuario.findMany({
            include: {
                tipoUsuario: true
            }
        });
    }
    async getById(cpf) {
        try {
            const user = await this.context.prisma.usuario.findUnique({
                where: {
                    cpf
                },
                include: {
                    tipoUsuario: true
                }
            });
            return user;
        }
        catch (error) {
            console.log({ error });
        }
    }
    async create(usuario) {
        return await this.context.prisma.usuario.create({
            data: {
                ...usuario
            }
        });
    }
    async editar(usuarioId, usuario) {
        if (usuarioId !== usuario.cpf && await this.getById(usuario.cpf)) {
            throw new apollo_server_1.ApolloError('Esse cpf já foi cadastrado', 'USER_FOUND');
        }
        return await this.context.prisma.usuario.update({
            where: {
                cpf: usuarioId
            },
            data: {
                ...usuario
            }
        });
    }
    async deletar(usuarioId) {
        return await this.context.prisma.usuario.delete({
            where: {
                cpf: usuarioId
            }
        });
    }
};
UsuarioService = __decorate([
    (0, typedi_1.Service)('UsuarioService'),
    __param(0, (0, typedi_1.Inject)('Context')),
    __metadata("design:paramtypes", [Object])
], UsuarioService);
exports.UsuarioService = UsuarioService;
