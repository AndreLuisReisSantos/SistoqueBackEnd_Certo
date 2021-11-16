import { InputType, Field, ID, ObjectType, Int } from 'type-graphql'
import { Representante } from './Representante'

@ObjectType()
export class Fornecedor {
  @Field((type) => ID)
  id: number

  @Field((type) => String!)
  razaoSocial: string

  @Field((type) => String)
  cnpj: string

  @Field((type) => String, { nullable: true })
  email: string

  @Field((type) => String, { nullable: true })
  telefone: string

  @Field((type) => String, { nullable: true })
  nomeFantasia: string

  @Field((type) => String, { nullable: true })
  site: string

  @Field((type) => String)
  celular: string

  @Field((type) => String)
  cep: string

  @Field((type) => String)
  logradouro: string

  @Field((type) => String)
  numero: string

  @Field((type) => String, { nullable: true })
  complemento: string

  @Field((type) => String)
  bairro: string

  @Field((type) => String)
  cidade: string

  @Field((type) => String)
  estado: string

  @Field((type) => Representante, { nullable: true })
  Representante: Representante
}

@InputType()
export class CriarFornecedor {
  @Field((type) => String)
  razaoSocial: string

  @Field((type) => String)
  cnpj: string

  @Field((type) => String, { nullable: true })
  email: string

  @Field((type) => String, { nullable: true })
  telefone: string

  @Field((type) => String, { nullable: true })
  nomeFantasia: string

  @Field((type) => String, { nullable: true })
  site: string

  @Field((type) => String, { nullable: true })
  celular: string

  @Field((type) => String)
  cep: string

  @Field((type) => String)
  logradouro: string

  @Field((type) => String)
  numero: string

  @Field((type) => String, { nullable: true })
  complemento: string

  @Field((type) => String)
  bairro: string

  @Field((type) => String)
  cidade: string

  @Field((type) => String)
  estado: string
}

@InputType()
export class EditarFornecedor {
  @Field((type) => String, { nullable: true })
  razaoSocial: string

  @Field((type) => String, { nullable: true })
  cnpj: string

  @Field((type) => String, { nullable: true })
  email: string

  @Field((type) => String, { nullable: true })
  telefone: string

  @Field((type) => String, { nullable: true })
  nomeFantasia: string

  @Field((type) => String, { nullable: true })
  site: string

  @Field((type) => String, { nullable: true })
  celular: string

  @Field((type) => String, { nullable: true })
  cep: string

  @Field((type) => String, { nullable: true })
  logradouro: string

  @Field((type) => String, { nullable: true })
  numero: string

  @Field((type) => String, { nullable: true })
  complemento: string

  @Field((type) => String, { nullable: true })
  bairro: string

  @Field((type) => String, { nullable: true })
  cidade: string

  @Field((type) => String, { nullable: true })
  estado: string

  @Field((type) => Int, { nullable: true })
  representanteId: number
}
