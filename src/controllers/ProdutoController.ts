import { Inject, Service } from 'typedi'
import { Arg, Int, Mutation, Query, Resolver } from 'type-graphql'

import { Produto, CriarProduto, EditarProduto } from '@models/Produto'
import { ProdutoService } from '@services/ProdutoService'

@Service()
@Resolver(Produto)
export class ProdutoController {
  constructor (
    @Inject('ProdutoService') private readonly produtoService: ProdutoService
  ) { }

  @Query((returns) => [Produto])
  async todosProdutos () {
    return await this.produtoService.getAll()
  }

  @Mutation((returns) => Produto)
  async criarProduto (
    @Arg('produto') produto: CriarProduto
  ) {
    return await this.produtoService.create({
      ...produto
    })
  }

  @Mutation((returns) => Produto)
  async editarProduto (
    @Arg('produtoId', (type) => Int) produtoId: number,
    @Arg('produto') produto: EditarProduto
  ) {
    return await this.produtoService.editar(produtoId, {
      ...produto
    })
  }

  @Mutation((returns) => Produto)
  async deletarProduto (
    @Arg('produtoId', (type) => Int) produtoId: number
  ) {
    return await this.produtoService.deletar(produtoId)
  }
}
