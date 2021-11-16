import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BaixaEstoqueAvgOrderByAggregateInput } from "../inputs/BaixaEstoqueAvgOrderByAggregateInput";
import { BaixaEstoqueCountOrderByAggregateInput } from "../inputs/BaixaEstoqueCountOrderByAggregateInput";
import { BaixaEstoqueMaxOrderByAggregateInput } from "../inputs/BaixaEstoqueMaxOrderByAggregateInput";
import { BaixaEstoqueMinOrderByAggregateInput } from "../inputs/BaixaEstoqueMinOrderByAggregateInput";
import { BaixaEstoqueSumOrderByAggregateInput } from "../inputs/BaixaEstoqueSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("BaixaEstoqueOrderByWithAggregationInput", {
  isAbstract: true
})
export class BaixaEstoqueOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  quantidadeProduto?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  tipo?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  foto?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  motivo?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  estoqueId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  pedidoId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => BaixaEstoqueCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: BaixaEstoqueCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => BaixaEstoqueAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: BaixaEstoqueAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => BaixaEstoqueMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: BaixaEstoqueMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => BaixaEstoqueMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: BaixaEstoqueMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => BaixaEstoqueSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: BaixaEstoqueSumOrderByAggregateInput | undefined;
}
