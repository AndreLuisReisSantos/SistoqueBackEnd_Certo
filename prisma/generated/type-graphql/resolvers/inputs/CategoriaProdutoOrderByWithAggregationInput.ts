import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoriaProdutoAvgOrderByAggregateInput } from "../inputs/CategoriaProdutoAvgOrderByAggregateInput";
import { CategoriaProdutoCountOrderByAggregateInput } from "../inputs/CategoriaProdutoCountOrderByAggregateInput";
import { CategoriaProdutoMaxOrderByAggregateInput } from "../inputs/CategoriaProdutoMaxOrderByAggregateInput";
import { CategoriaProdutoMinOrderByAggregateInput } from "../inputs/CategoriaProdutoMinOrderByAggregateInput";
import { CategoriaProdutoSumOrderByAggregateInput } from "../inputs/CategoriaProdutoSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("CategoriaProdutoOrderByWithAggregationInput", {
  isAbstract: true
})
export class CategoriaProdutoOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  nome?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => CategoriaProdutoCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: CategoriaProdutoCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CategoriaProdutoAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: CategoriaProdutoAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CategoriaProdutoMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: CategoriaProdutoMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CategoriaProdutoMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: CategoriaProdutoMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CategoriaProdutoSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: CategoriaProdutoSumOrderByAggregateInput | undefined;
}
