import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UsuarioCreateWithoutPedidoInput } from "../inputs/UsuarioCreateWithoutPedidoInput";
import { UsuarioWhereUniqueInput } from "../inputs/UsuarioWhereUniqueInput";

@TypeGraphQL.InputType("UsuarioCreateOrConnectWithoutPedidoInput", {
  isAbstract: true
})
export class UsuarioCreateOrConnectWithoutPedidoInput {
  @TypeGraphQL.Field(_type => UsuarioWhereUniqueInput, {
    nullable: false
  })
  where!: UsuarioWhereUniqueInput;

  @TypeGraphQL.Field(_type => UsuarioCreateWithoutPedidoInput, {
    nullable: false
  })
  create!: UsuarioCreateWithoutPedidoInput;
}
