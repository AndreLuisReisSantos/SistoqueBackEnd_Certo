import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Estoque } from "../models/Estoque";
import { Representante } from "../models/Representante";
import { FornecedorCount } from "../resolvers/outputs/FornecedorCount";

@TypeGraphQL.ObjectType("Fornecedor", {
  isAbstract: true
})
export class Fornecedor {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  razaoSocial!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  cnpj!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  email?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  telefone?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  nomeFantasia?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  site?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  celular?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  cep!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  logradouro!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  numero!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  complemento?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  bairro!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  cidade!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  estado!: string;

  Estoque?: Estoque[];

  Representante?: Representante | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  representanteId?: number | null;

  @TypeGraphQL.Field(_type => FornecedorCount, {
    nullable: true
  })
  _count?: FornecedorCount | null;
}
