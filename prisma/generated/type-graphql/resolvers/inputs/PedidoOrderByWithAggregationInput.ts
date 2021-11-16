import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PedidoAvgOrderByAggregateInput } from "../inputs/PedidoAvgOrderByAggregateInput";
import { PedidoCountOrderByAggregateInput } from "../inputs/PedidoCountOrderByAggregateInput";
import { PedidoMaxOrderByAggregateInput } from "../inputs/PedidoMaxOrderByAggregateInput";
import { PedidoMinOrderByAggregateInput } from "../inputs/PedidoMinOrderByAggregateInput";
import { PedidoSumOrderByAggregateInput } from "../inputs/PedidoSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PedidoOrderByWithAggregationInput", {
  isAbstract: true
})
export class PedidoOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  dataPedido?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  usuarioCpf?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => PedidoCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: PedidoCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PedidoAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: PedidoAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PedidoMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: PedidoMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PedidoMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: PedidoMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PedidoSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: PedidoSumOrderByAggregateInput | undefined;
}
