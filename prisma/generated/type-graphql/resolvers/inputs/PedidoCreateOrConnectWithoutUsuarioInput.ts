import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PedidoCreateWithoutUsuarioInput } from "../inputs/PedidoCreateWithoutUsuarioInput";
import { PedidoWhereUniqueInput } from "../inputs/PedidoWhereUniqueInput";

@TypeGraphQL.InputType("PedidoCreateOrConnectWithoutUsuarioInput", {
  isAbstract: true
})
export class PedidoCreateOrConnectWithoutUsuarioInput {
  @TypeGraphQL.Field(_type => PedidoWhereUniqueInput, {
    nullable: false
  })
  where!: PedidoWhereUniqueInput;

  @TypeGraphQL.Field(_type => PedidoCreateWithoutUsuarioInput, {
    nullable: false
  })
  create!: PedidoCreateWithoutUsuarioInput;
}
