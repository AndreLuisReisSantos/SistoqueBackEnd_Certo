import { Inject, Service } from 'typedi'
import { Arg, Int, Mutation, Query, Resolver } from 'type-graphql'
import { Fornecedor, CriarFornecedor, EditarFornecedor } from '@models/Fornecedor'
import { FornecedorService } from '@services/FornecedorService'
import { ApolloError } from 'apollo-server'
import { RepresentanteService } from './../services/RepresentanteService'

@Service()
@Resolver(Fornecedor)
export class FornecedorController {
  constructor (
    @Inject('FornecedorService') private readonly fornecedorService: FornecedorService,
    @Inject('RepresentanteService') private readonly representanteService: RepresentanteService
  ) { }

  @Query((returns) => [Fornecedor])
  async todosFornecedores () {
    console.log(await this.fornecedorService.getAll())
    return await this.fornecedorService.getAll()
  }

  @Mutation((returns) => Fornecedor)
  async deletarFornecedor (
    @Arg('fornecedorId', (type) => Int) fornecedorId: number
  ) {
    const fornecedor = await this.fornecedorService.getBy({ id: fornecedorId })
    if (!fornecedor[0].id) {
      throw new ApolloError('Não foi encontrado esse fornecedor', 'FORNECEDOR_NOT_FOUND')
    }

    return await this.fornecedorService.deletar(fornecedorId)
  }

  @Mutation((returns) => Fornecedor)
  async editarFornecedor (
    @Arg('fornecedorId', (type) => Int) fornecedorId: number,
    @Arg('fornecedor') fornecedor: EditarFornecedor
  ) {
    const oldFornecedor = await this.fornecedorService.getBy({ id: fornecedorId })

    if (!oldFornecedor[0].id) {
      throw new ApolloError('Não foi encontrado esse fornecedor', 'FORNECEDOR_NOT_FOUND')
    }

    if (fornecedor.cnpj && oldFornecedor[0].cnpj !== fornecedor.cnpj && await this.fornecedorService.getBy({ cnpj: fornecedor.cnpj })) {
      throw new ApolloError('Já existe um fornecedor com esse cnpj cadastrado', 'FORNECEDOR_FOUND')
    }

    return await this.fornecedorService.editar(fornecedorId, fornecedor)
  }

  @Mutation((returns) => Fornecedor)
  async criarFornecedor (
    @Arg('fornecedor') fornecedor: CriarFornecedor,
    @Arg('representanteId', (type) => Int) representanteId: number
  ) {
    if ((await this.fornecedorService.getBy({ cnpj: fornecedor.cnpj })).length > 0) {
      throw new ApolloError('Já existe um fornecedor com esse cnpj cadastrado', 'FORNECEDOR_FOUND')
    }
    if (!representanteId) {
      throw new ApolloError('Informe o representante desse fornecedor', 'REPRESENTANTE_NOT_FOUND')
    }

    if (!await this.representanteService.getById(representanteId)) {
      throw new ApolloError('Representante não encontrado', 'REPRESENTANTE_NOT_FOUND')
    }

    return await this.fornecedorService.create({
      ...fornecedor,
      represante: {
        connect: {
          id: representanteId
        }
      }
    })
  }
}
