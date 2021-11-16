import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PedidoWhereInput } from "../inputs/PedidoWhereInput";

@TypeGraphQL.InputType("PedidoRelationFilter", {
  isAbstract: true
})
export class PedidoRelationFilter {
  @TypeGraphQL.Field(_type => PedidoWhereInput, {
    nullable: true
  })
  is?: PedidoWhereInput | undefined;

  @TypeGraphQL.Field(_type => PedidoWhereInput, {
    nullable: true
  })
  isNot?: PedidoWhereInput | undefined;
}
