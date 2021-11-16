import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UsuarioCreateWithoutPedidoInput } from "../inputs/UsuarioCreateWithoutPedidoInput";
import { UsuarioUpdateWithoutPedidoInput } from "../inputs/UsuarioUpdateWithoutPedidoInput";

@TypeGraphQL.InputType("UsuarioUpsertWithoutPedidoInput", {
  isAbstract: true
})
export class UsuarioUpsertWithoutPedidoInput {
  @TypeGraphQL.Field(_type => UsuarioUpdateWithoutPedidoInput, {
    nullable: false
  })
  update!: UsuarioUpdateWithoutPedidoInput;

  @TypeGraphQL.Field(_type => UsuarioCreateWithoutPedidoInput, {
    nullable: false
  })
  create!: UsuarioCreateWithoutPedidoInput;
}
