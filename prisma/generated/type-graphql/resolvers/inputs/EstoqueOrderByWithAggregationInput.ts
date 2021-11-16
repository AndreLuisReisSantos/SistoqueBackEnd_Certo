import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EstoqueAvgOrderByAggregateInput } from "../inputs/EstoqueAvgOrderByAggregateInput";
import { EstoqueCountOrderByAggregateInput } from "../inputs/EstoqueCountOrderByAggregateInput";
import { EstoqueMaxOrderByAggregateInput } from "../inputs/EstoqueMaxOrderByAggregateInput";
import { EstoqueMinOrderByAggregateInput } from "../inputs/EstoqueMinOrderByAggregateInput";
import { EstoqueSumOrderByAggregateInput } from "../inputs/EstoqueSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("EstoqueOrderByWithAggregationInput", {
  isAbstract: true
})
export class EstoqueOrderByWithAggregationInput {
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
  produtoId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  dataRecebimento?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  dataVencimento?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  marca?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  preco?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  fornecedorId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => EstoqueCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: EstoqueCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EstoqueAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: EstoqueAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EstoqueMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: EstoqueMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EstoqueMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: EstoqueMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EstoqueSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: EstoqueSumOrderByAggregateInput | undefined;
}
