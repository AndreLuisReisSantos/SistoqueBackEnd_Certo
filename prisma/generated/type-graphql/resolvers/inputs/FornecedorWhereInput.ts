import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EstoqueListRelationFilter } from "../inputs/EstoqueListRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { RepresentanteRelationFilter } from "../inputs/RepresentanteRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("FornecedorWhereInput", {
  isAbstract: true
})
export class FornecedorWhereInput {
  @TypeGraphQL.Field(_type => [FornecedorWhereInput], {
    nullable: true
  })
  AND?: FornecedorWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [FornecedorWhereInput], {
    nullable: true
  })
  OR?: FornecedorWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [FornecedorWhereInput], {
    nullable: true
  })
  NOT?: FornecedorWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  razaoSocial?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  cnpj?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  email?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  telefone?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  nomeFantasia?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  site?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  celular?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  cep?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  logradouro?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  numero?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  complemento?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  bairro?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  cidade?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  estado?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => EstoqueListRelationFilter, {
    nullable: true
  })
  Estoque?: EstoqueListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => RepresentanteRelationFilter, {
    nullable: true
  })
  Representante?: RepresentanteRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  representanteId?: IntNullableFilter | undefined;
}
