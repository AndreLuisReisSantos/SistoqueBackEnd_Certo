import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UsuarioCreateOrConnectWithoutPedidoInput } from "../inputs/UsuarioCreateOrConnectWithoutPedidoInput";
import { UsuarioCreateWithoutPedidoInput } from "../inputs/UsuarioCreateWithoutPedidoInput";
import { UsuarioWhereUniqueInput } from "../inputs/UsuarioWhereUniqueInput";

@TypeGraphQL.InputType("UsuarioCreateNestedOneWithoutPedidoInput", {
  isAbstract: true
})
export class UsuarioCreateNestedOneWithoutPedidoInput {
  @TypeGraphQL.Field(_type => UsuarioCreateWithoutPedidoInput, {
    nullable: true
  })
  create?: UsuarioCreateWithoutPedidoInput | undefined;

  @TypeGraphQL.Field(_type => UsuarioCreateOrConnectWithoutPedidoInput, {
    nullable: true
  })
  connectOrCreate?: UsuarioCreateOrConnectWithoutPedidoInput | undefined;

  @TypeGraphQL.Field(_type => UsuarioWhereUniqueInput, {
    nullable: true
  })
  connect?: UsuarioWhereUniqueInput | undefined;
}
