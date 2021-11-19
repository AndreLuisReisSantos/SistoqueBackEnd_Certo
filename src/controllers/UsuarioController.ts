import { Inject, Service } from 'typedi'
import { Arg, Mutation, Query, Resolver } from 'type-graphql'

import { Usuario, CriarUsuario, EditarUsuario } from '@models/Usuario'
import { UsuarioService } from '@services/UsuarioService'

@Service()
@Resolver(Usuario)
export class UsuarioController {
  constructor (
    @Inject('UsuarioService') private readonly usuarioService: UsuarioService
  ) { }

  @Query((returns) => [Usuario])
  async todosUsuarios () {
    return await this.usuarioService.getAll()
  }

  @Mutation((returns) => Usuario)
  async criarUsuario (
    @Arg('usuario') usuario: CriarUsuario
  ) {
    return await this.usuarioService.create({
      ...usuario,
      tipoUsuario: {
        connect: {
          id: usuario.tipoUsuario
        }
      }
    })
  }

  @Mutation((returns) => Usuario)
  async editarUsuario (
    @Arg('usuarioId', (type) => String) usuarioId: string,
    @Arg('usuario') usuario: EditarUsuario
  ) {
    return await this.usuarioService.editar(usuarioId, {
      ...usuario,
      tipoUsuario: {
        connect: {
          id: usuario.tipoUsuario
        }
      }
    })
  }

  @Mutation((returns) => Usuario)
  async deletarUsuario (
    @Arg('usuarioId', (type) => String) usuarioId: string
  ) {
    return await this.usuarioService.deletar(usuarioId)
  }
}
