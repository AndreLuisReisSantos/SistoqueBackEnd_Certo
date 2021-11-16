import { Prisma } from '@prisma/client'
import { Inject, Service } from 'typedi'
import { Context } from '../context'

@Service('RepresentanteService')
export class RepresentanteService {
  constructor (
    @Inject('Context') private readonly context: Context
  ) { }

  async getAll () {
    return await this.context.prisma.representante.findMany()
  }

  async getById (id: number) {
    return await this.context.prisma.representante.findUnique({
      where: {
        id
      }
    })
  }

  async create (represante: Prisma.RepresentanteCreateInput) {
    return await this.context.prisma.representante.create({
      data: {
        ...represante
      }
    })
  }
}
