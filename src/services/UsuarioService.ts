import { Prisma } from '@prisma/client'
import { ApolloError } from 'apollo-server'
import { Inject, Service } from 'typedi'
import { Context } from '../context'

@Service('UsuarioService')
export class UsuarioService {
  constructor (
    @Inject('Context') private readonly context: Context
  ) { }

  async getAll () {
    return await this.context.prisma.usuario.findMany({
      include: {
        tipoUsuario: true
      }
    })
  }

  async getById (cpf: string) {
    return await this.context.prisma.usuario.findUnique({
      where: {
        cpf
      },
      include: {
        tipoUsuario: true
      }
    })
  }

  async create (usuario: Prisma.UsuarioCreateInput) {
    if (await this.getById(usuario.cpf)) {
      throw new ApolloError('Esse cpf já foi cadastrado', 'USER_FOUND')
    }
    return await this.context.prisma.usuario.create({
      data: {
        ...usuario
      }
    })
  }

  async editar (usuarioId: string, usuario: Prisma.UsuarioUpdateInput) {
    if (usuarioId !== usuario.cpf && await this.getById(usuario.cpf as string)) {
      throw new ApolloError('Esse cpf já foi cadastrado', 'USER_FOUND')
    }
    return await this.context.prisma.usuario.update({
      where: {
        cpf: usuarioId
      },
      data: {
        ...usuario
      }
    })
  }

  async deletar (usuarioId: string) {
    if (!await this.getById(usuarioId)) {
      throw new ApolloError('Usuario não encontrado', 'USER_NOT_FOUND')
    }
    return await this.context.prisma.usuario.delete({
      where: {
        cpf: usuarioId
      }
    })
  }
}
