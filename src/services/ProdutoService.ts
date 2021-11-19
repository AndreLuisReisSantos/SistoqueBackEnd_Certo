import { Prisma } from '@prisma/client'
import { Inject, Service } from 'typedi'
import { Context } from '../context'

@Service('ProdutoService')
export class ProdutoService {
  constructor (
    @Inject('Context') private readonly context: Context
  ) { }

  async getAll () {
    return await this.context.prisma.produto.findMany()
  }

  async create (produto: Prisma.ProdutoCreateInput) {
    return await this.context.prisma.produto.create({
      data: {
        ...produto
      }
    })
  }

  async editar (produtoId: number, produto: Prisma.ProdutoUpdateInput) {
    return await this.context.prisma.produto.update({
      where: {
        id: produtoId
      },
      data: {
        ...produto
      }
    })
  }

  async deletar (produtoId: number) {
    return await this.context.prisma.produto.delete({
      where: {
        id: produtoId
      }
    })
  }
}
