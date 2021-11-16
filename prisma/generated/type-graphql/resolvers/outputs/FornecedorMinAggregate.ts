import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("FornecedorMinAggregate", {
  isAbstract: true
})
export class FornecedorMinAggregate {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  razaoSocial!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  cnpj!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  email!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  telefone!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  nomeFantasia!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  site!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  celular!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  cep!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  logradouro!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  numero!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  complemento!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  bairro!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  cidade!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  estado!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  representanteId!: number | null;
}
