import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PedidoWhereInput } from "../inputs/PedidoWhereInput";

@TypeGraphQL.InputType("PedidoListRelationFilter", {
  isAbstract: true
})
export class PedidoListRelationFilter {
  @TypeGraphQL.Field(_type => PedidoWhereInput, {
    nullable: true
  })
  every?: PedidoWhereInput | undefined;

  @TypeGraphQL.Field(_type => PedidoWhereInput, {
    nullable: true
  })
  some?: PedidoWhereInput | undefined;

  @TypeGraphQL.Field(_type => PedidoWhereInput, {
    nullable: true
  })
  none?: PedidoWhereInput | undefined;
}
