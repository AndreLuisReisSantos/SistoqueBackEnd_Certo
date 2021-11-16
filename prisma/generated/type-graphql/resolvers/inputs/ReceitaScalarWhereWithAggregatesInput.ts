import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("ReceitaScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class ReceitaScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [ReceitaScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: ReceitaScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReceitaScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: ReceitaScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReceitaScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: ReceitaScalarWhereWithAggregatesInput[] | undefined;

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
  tipo?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  descricao?: StringWithAggregatesFilter | undefined;
}
