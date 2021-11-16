import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProdutoAvgOrderByAggregateInput } from "../inputs/ProdutoAvgOrderByAggregateInput";
import { ProdutoCountOrderByAggregateInput } from "../inputs/ProdutoCountOrderByAggregateInput";
import { ProdutoMaxOrderByAggregateInput } from "../inputs/ProdutoMaxOrderByAggregateInput";
import { ProdutoMinOrderByAggregateInput } from "../inputs/ProdutoMinOrderByAggregateInput";
import { ProdutoSumOrderByAggregateInput } from "../inputs/ProdutoSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ProdutoOrderByWithAggregationInput", {
  isAbstract: true
})
export class ProdutoOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  nome?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  descricao?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  unidadeMedida?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  categoriaProdutoId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  receitaId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ProdutoCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: ProdutoCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ProdutoAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: ProdutoAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ProdutoMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: ProdutoMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ProdutoMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: ProdutoMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ProdutoSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: ProdutoSumOrderByAggregateInput | undefined;
}
