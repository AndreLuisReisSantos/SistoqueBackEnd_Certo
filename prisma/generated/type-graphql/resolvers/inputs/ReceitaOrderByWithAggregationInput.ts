import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReceitaAvgOrderByAggregateInput } from "../inputs/ReceitaAvgOrderByAggregateInput";
import { ReceitaCountOrderByAggregateInput } from "../inputs/ReceitaCountOrderByAggregateInput";
import { ReceitaMaxOrderByAggregateInput } from "../inputs/ReceitaMaxOrderByAggregateInput";
import { ReceitaMinOrderByAggregateInput } from "../inputs/ReceitaMinOrderByAggregateInput";
import { ReceitaSumOrderByAggregateInput } from "../inputs/ReceitaSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ReceitaOrderByWithAggregationInput", {
  isAbstract: true
})
export class ReceitaOrderByWithAggregationInput {
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
  tipo?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  descricao?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ReceitaCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: ReceitaCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ReceitaAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: ReceitaAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ReceitaMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: ReceitaMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ReceitaMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: ReceitaMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ReceitaSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: ReceitaSumOrderByAggregateInput | undefined;
}
