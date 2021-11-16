import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EnumUnidadeMedidaWithAggregatesFilter } from "../inputs/EnumUnidadeMedidaWithAggregatesFilter";
import { IntNullableWithAggregatesFilter } from "../inputs/IntNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("ProdutoScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class ProdutoScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [ProdutoScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: ProdutoScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProdutoScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: ProdutoScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProdutoScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: ProdutoScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  nome?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  descricao?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => EnumUnidadeMedidaWithAggregatesFilter, {
    nullable: true
  })
  unidadeMedida?: EnumUnidadeMedidaWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  categoriaProdutoId?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableWithAggregatesFilter, {
    nullable: true
  })
  receitaId?: IntNullableWithAggregatesFilter | undefined;
}
