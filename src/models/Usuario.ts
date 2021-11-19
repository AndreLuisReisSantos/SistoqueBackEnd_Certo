/* eslint-disable import/extensions */
// eslint-disable-next-line import/no-unresolved
import { TipoUsuario } from './TipoUsuario'

import {
  Field, ID, InputType, Int, ObjectType
} from 'type-graphql'

@ObjectType()
export class Usuario {
  @Field((type) => ID)
  cpf: string

  @Field((type) => String)
  senha: string

  @Field((type) => String)
  nome: string

  @Field((type) => String)
  rg: string

  @Field((type) => String)
  celular: string

  @Field((type) => Date)
  dataNascimento: Date

  @Field((type) => TipoUsuario)
  tipoUsuario: TipoUsuario
}

@InputType()
export class CriarUsuario {
  @Field((type) => ID)
  cpf: string

  @Field((type) => String)
  senha: string

  @Field((type) => String)
  nome: string

  @Field((type) => String)
  rg: string

  @Field((type) => String)
  celular: string

  @Field((type) => Date)
  dataNascimento: Date

  @Field((type) => Int)
  tipoUsuario: number
}
@InputType()
export class EditarUsuario {
  @Field((type) => ID)
  cpf: string

  @Field((type) => String)
  senha: string

  @Field((type) => String)
  nome: string

  @Field((type) => String)
  rg: string

  @Field((type) => String)
  celular: string

  @Field((type) => Date)
  dataNascimento: Date

  @Field((type) => Int)
  tipoUsuario: number
}
