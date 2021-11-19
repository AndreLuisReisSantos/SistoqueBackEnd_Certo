import { InputType, Field, ID, ObjectType } from 'type-graphql'

@ObjectType()
export class Produto {
  @Field((type) => ID)
  id: number

  @Field((type) => String!)
  nome: string

  @Field((type) => String, { nullable: true })
  descricao: string

  @Field((type) => String)
  unidadeMedida: string
}

@InputType()
export class CriarProduto {
  @Field((type) => String!)
  nome: string

  @Field((type) => String, { nullable: true })
  descricao: string

  @Field((type) => String)
  unidadeMedida: string
}

@InputType()
export class EditarProduto {
  @Field((type) => String!)
  nome: string

  @Field((type) => String, { nullable: true })
  descricao: string

  @Field((type) => String)
  unidadeMedida: string
}
