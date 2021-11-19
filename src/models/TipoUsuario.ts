import { Field, ID, ObjectType } from 'type-graphql'

@ObjectType()
export class TipoUsuario {
  @Field((_type) => ID)
  id: number

  @Field((_type) => String)
  nome: string
}
