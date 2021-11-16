import { Inject, Service } from 'typedi'
import { Arg, Mutation, Query, Resolver } from 'type-graphql'
import { RepresentanteService } from './../services/RepresentanteService'
import { Representante, CriarRepresentante } from '@models/Representante'

@Service()
@Resolver(Representante)
export class RepresentanteController {
  constructor (
    @Inject('RepresentanteService') private readonly representanteService: RepresentanteService
  ) { }

  @Query((returns) => [Representante])
  async todosRepresentantes () {
    return await this.representanteService.getAll()
  }

  @Mutation((returns) => Representante)
  async criarRepresentante (
    @Arg('representante') representante: CriarRepresentante
  ) {
    return await this.representanteService.create({
      ...representante
    })
  }
}
