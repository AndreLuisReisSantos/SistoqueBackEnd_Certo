import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("RepresentanteScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class RepresentanteScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [RepresentanteScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: RepresentanteScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [RepresentanteScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: RepresentanteScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [RepresentanteScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: RepresentanteScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  nome?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  celular?: StringWithAggregatesFilter | undefined;
}
