import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EnumTipoBaixaEstoqueFilter } from "../inputs/EnumTipoBaixaEstoqueFilter";
import { EstoqueRelationFilter } from "../inputs/EstoqueRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { PedidoRelationFilter } from "../inputs/PedidoRelationFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("BaixaEstoqueWhereInput", {
  isAbstract: true
})
export class BaixaEstoqueWhereInput {
  @TypeGraphQL.Field(_type => [BaixaEstoqueWhereInput], {
    nullable: true
  })
  AND?: BaixaEstoqueWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [BaixaEstoqueWhereInput], {
    nullable: true
  })
  OR?: BaixaEstoqueWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [BaixaEstoqueWhereInput], {
    nullable: true
  })
  NOT?: BaixaEstoqueWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  quantidadeProduto?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => EnumTipoBaixaEstoqueFilter, {
    nullable: true
  })
  tipo?: EnumTipoBaixaEstoqueFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  foto?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  motivo?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => EstoqueRelationFilter, {
    nullable: true
  })
  Estoque?: EstoqueRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  estoqueId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => PedidoRelationFilter, {
    nullable: true
  })
  Pedido?: PedidoRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  pedidoId?: IntNullableFilter | undefined;
}
