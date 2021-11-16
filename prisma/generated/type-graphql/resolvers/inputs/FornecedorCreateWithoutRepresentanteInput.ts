import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EstoqueCreateNestedManyWithoutFornecedorInput } from "../inputs/EstoqueCreateNestedManyWithoutFornecedorInput";

@TypeGraphQL.InputType("FornecedorCreateWithoutRepresentanteInput", {
  isAbstract: true
})
export class FornecedorCreateWithoutRepresentanteInput {
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

  @TypeGraphQL.Field(_type => EstoqueCreateNestedManyWithoutFornecedorInput, {
    nullable: true
  })
  Estoque?: EstoqueCreateNestedManyWithoutFornecedorInput | undefined;
}
