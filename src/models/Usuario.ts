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

@ObjectType()
export class Login {
  @Field((type) => String!)
  token: string
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
  @Field((type) => ID, { nullable: true })
  cpf: string

  @Field((type) => String, { nullable: true })
  senha: string

  @Field((type) => String, { nullable: true })
  nome: string

  @Field((type) => String, { nullable: true })
  rg: string

  @Field((type) => String, { nullable: true })
  celular: string

  @Field((type) => Date, { nullable: true })
  dataNascimento: Date

  @Field((type) => Int, { nullable: true })
  tipoUsuario: number
}
