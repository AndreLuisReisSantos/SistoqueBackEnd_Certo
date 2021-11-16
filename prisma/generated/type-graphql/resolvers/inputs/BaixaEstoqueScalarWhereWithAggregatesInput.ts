import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EnumTipoBaixaEstoqueWithAggregatesFilter } from "../inputs/EnumTipoBaixaEstoqueWithAggregatesFilter";
import { IntNullableWithAggregatesFilter } from "../inputs/IntNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";

@TypeGraphQL.InputType("BaixaEstoqueScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class BaixaEstoqueScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [BaixaEstoqueScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: BaixaEstoqueScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [BaixaEstoqueScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: BaixaEstoqueScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [BaixaEstoqueScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: BaixaEstoqueScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  quantidadeProduto?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => EnumTipoBaixaEstoqueWithAggregatesFilter, {
    nullable: true
  })
  tipo?: EnumTipoBaixaEstoqueWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  foto?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  motivo?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  estoqueId?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableWithAggregatesFilter, {
    nullable: true
  })
  pedidoId?: IntNullableWithAggregatesFilter | undefined;
}
