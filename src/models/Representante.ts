import { InputType, Field, ID, ObjectType } from 'type-graphql'

@ObjectType()
export class Representante {
  @Field((type) => ID)
  id: number

  @Field((type) => String)
  nome: string

  @Field((type) => String)
  celular: string
}

@InputType()
export class CriarRepresentante {
  @Field((type) => String)
  nome: string

  @Field((type) => String)
  celular: string
}
