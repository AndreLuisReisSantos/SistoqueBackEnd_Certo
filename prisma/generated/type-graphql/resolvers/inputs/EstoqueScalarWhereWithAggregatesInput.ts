import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { FloatWithAggregatesFilter } from "../inputs/FloatWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("EstoqueScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class EstoqueScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [EstoqueScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: EstoqueScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [EstoqueScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: EstoqueScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [EstoqueScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: EstoqueScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  quantidadeProduto?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  produtoId?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  dataRecebimento?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  dataVencimento?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  marca?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => FloatWithAggregatesFilter, {
    nullable: true
  })
  preco?: FloatWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  fornecedorId?: IntWithAggregatesFilter | undefined;
}
