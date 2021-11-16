import { Prisma } from '@prisma/client'
import { Inject, Service } from 'typedi'
import { Context } from '../context'

@Service('FornecedorService')
export class FornecedorService {
  constructor (
    @Inject('Context') private readonly context: Context
  ) { }

  async getBy (params: Prisma.FornecedorWhereInput) {
    return await this.context.prisma.fornecedor.findMany({ where: params })
  }

  async getAll () {
    return await this.context.prisma.fornecedor.findMany({
      include: {
        Representante: true
      }
    })
  }

  async create (fornecedor: Prisma.FornecedorCreateInput) {
    return await this.context.prisma.fornecedor.create({
      data: {
        ...fornecedor
      }
    })
  }

  async editar (fornecedorId: number, fornecedor: Prisma.FornecedorUpdateInput) {
    return await this.context.prisma.fornecedor.update({
      where: {
        id: fornecedorId
      },
      data: {
        ...fornecedor
      }
    })
  }

  async deletar (fornecedorId: number) {
    return await this.context.prisma.fornecedor.delete({
      where: {
        id: fornecedorId
      }
    })
  }
}
