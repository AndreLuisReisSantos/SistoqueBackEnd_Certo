/* eslint-disable import/extensions */
// eslint-disable-next-line import/no-unresolved

import {
  Field, ID, Int, ObjectType,
} from 'type-graphql';

@ObjectType()
class Usuario {
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

  @Field((type) => [Int])
  Pedido: number[]
}
export default Usuario;
