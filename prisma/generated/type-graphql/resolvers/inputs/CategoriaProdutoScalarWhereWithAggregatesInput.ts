import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("CategoriaProdutoScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class CategoriaProdutoScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [CategoriaProdutoScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: CategoriaProdutoScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [CategoriaProdutoScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: CategoriaProdutoScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [CategoriaProdutoScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: CategoriaProdutoScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  nome?: StringWithAggregatesFilter | undefined;
}
