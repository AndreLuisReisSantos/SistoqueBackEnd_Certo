import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RepresentanteAvgOrderByAggregateInput } from "../inputs/RepresentanteAvgOrderByAggregateInput";
import { RepresentanteCountOrderByAggregateInput } from "../inputs/RepresentanteCountOrderByAggregateInput";
import { RepresentanteMaxOrderByAggregateInput } from "../inputs/RepresentanteMaxOrderByAggregateInput";
import { RepresentanteMinOrderByAggregateInput } from "../inputs/RepresentanteMinOrderByAggregateInput";
import { RepresentanteSumOrderByAggregateInput } from "../inputs/RepresentanteSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("RepresentanteOrderByWithAggregationInput", {
  isAbstract: true
})
export class RepresentanteOrderByWithAggregationInput {
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
  celular?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => RepresentanteCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: RepresentanteCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => RepresentanteAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: RepresentanteAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => RepresentanteMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: RepresentanteMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => RepresentanteMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: RepresentanteMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => RepresentanteSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: RepresentanteSumOrderByAggregateInput | undefined;
}
