import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoriaProdutoRelationFilter } from "../inputs/CategoriaProdutoRelationFilter";
import { EnumUnidadeMedidaFilter } from "../inputs/EnumUnidadeMedidaFilter";
import { EstoqueListRelationFilter } from "../inputs/EstoqueListRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { ReceitaRelationFilter } from "../inputs/ReceitaRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("ProdutoWhereInput", {
  isAbstract: true
})
export class ProdutoWhereInput {
  @TypeGraphQL.Field(_type => [ProdutoWhereInput], {
    nullable: true
  })
  AND?: ProdutoWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProdutoWhereInput], {
    nullable: true
  })
  OR?: ProdutoWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProdutoWhereInput], {
    nullable: true
  })
  NOT?: ProdutoWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  nome?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  descricao?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => EnumUnidadeMedidaFilter, {
    nullable: true
  })
  unidadeMedida?: EnumUnidadeMedidaFilter | undefined;

  @TypeGraphQL.Field(_type => CategoriaProdutoRelationFilter, {
    nullable: true
  })
  categoria?: CategoriaProdutoRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  categoriaProdutoId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => EstoqueListRelationFilter, {
    nullable: true
  })
  Estoque?: EstoqueListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ReceitaRelationFilter, {
    nullable: true
  })
  Receita?: ReceitaRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  receitaId?: IntNullableFilter | undefined;
}
