import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TipoUsuarioAvgOrderByAggregateInput } from "../inputs/TipoUsuarioAvgOrderByAggregateInput";
import { TipoUsuarioCountOrderByAggregateInput } from "../inputs/TipoUsuarioCountOrderByAggregateInput";
import { TipoUsuarioMaxOrderByAggregateInput } from "../inputs/TipoUsuarioMaxOrderByAggregateInput";
import { TipoUsuarioMinOrderByAggregateInput } from "../inputs/TipoUsuarioMinOrderByAggregateInput";
import { TipoUsuarioSumOrderByAggregateInput } from "../inputs/TipoUsuarioSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("TipoUsuarioOrderByWithAggregationInput", {
  isAbstract: true
})
export class TipoUsuarioOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  nome?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => TipoUsuarioCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: TipoUsuarioCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TipoUsuarioAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: TipoUsuarioAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TipoUsuarioMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: TipoUsuarioMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TipoUsuarioMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: TipoUsuarioMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TipoUsuarioSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: TipoUsuarioSumOrderByAggregateInput | undefined;
}
