import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("TipoUsuarioScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class TipoUsuarioScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [TipoUsuarioScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: TipoUsuarioScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [TipoUsuarioScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: TipoUsuarioScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [TipoUsuarioScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: TipoUsuarioScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  nome?: StringWithAggregatesFilter | undefined;
}
