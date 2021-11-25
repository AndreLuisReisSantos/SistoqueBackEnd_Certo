import { Inject, Service } from 'typedi'
import { Arg, Mutation, Query, Resolver } from 'type-graphql'
import { ApolloError } from 'apollo-server'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { Usuario, CriarUsuario, EditarUsuario, Login } from '@models/Usuario'
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
    if (await this.usuarioService.getById(usuario.cpf)) {
      throw new ApolloError('Esse cpf já foi cadastrado', 'USER_FOUND')
    }
    const salt = bcrypt.genSaltSync(8)
    const hash = bcrypt.hashSync(usuario.senha, salt)

    return await this.usuarioService.create({
      ...usuario,
      senha: hash,
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
    const oldInfo = await this.usuarioService.getById(usuarioId)
    if (!oldInfo) {
      throw new ApolloError('Usuário não encontrado', 'USER_NOT_FOUND')
    }

    if (usuario.senha) {
      const salt = bcrypt.genSaltSync(8)
      const hash = bcrypt.hashSync(usuario.senha, salt)
      usuario.senha = hash
    }

    return await this.usuarioService.editar(usuarioId, {
      ...usuario,
      tipoUsuario: {
        connect: {
          id: usuario.tipoUsuario || oldInfo.tipoUsuario.id
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

  @Mutation((returns) => Login)
  async login (
    @Arg('cpf', (type) => String) cpf: string,
    @Arg('senha', (type) => String) senha: string
  ) {
    const user = await this.usuarioService.getById(cpf)
    if (!user) {
      throw new ApolloError('Usuário não encontrado', 'USER_NOT_FOUND')
    }

    const verificarSenha = bcrypt.compare(senha, user.senha)

    if (!verificarSenha) {
      throw new ApolloError('Usuário não encontrado', 'USER_NOT_FOUND')
    }

    return {
      token: jwt.sign({
        userId: user.cpf
      }, process.env.SECRET_JWT, { expiresIn: '2days' })
    }
  }
}
