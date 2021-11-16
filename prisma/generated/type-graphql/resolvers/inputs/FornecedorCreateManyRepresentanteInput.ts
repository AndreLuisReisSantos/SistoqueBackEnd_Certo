import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("FornecedorCreateManyRepresentanteInput", {
  isAbstract: true
})
export class FornecedorCreateManyRepresentanteInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

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
  email?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  telefone?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  nomeFantasia?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  site?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  celular?: string | undefined;

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
  complemento?: string | undefined;

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
}
