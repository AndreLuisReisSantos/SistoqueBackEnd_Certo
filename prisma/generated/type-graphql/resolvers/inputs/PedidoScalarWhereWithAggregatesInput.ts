import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("PedidoScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class PedidoScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [PedidoScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: PedidoScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PedidoScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: PedidoScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PedidoScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: PedidoScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  dataPedido?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  usuarioCpf?: StringWithAggregatesFilter | undefined;
}
