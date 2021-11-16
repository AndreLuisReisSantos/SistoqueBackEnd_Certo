import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UsuarioCreateOrConnectWithoutPedidoInput } from "../inputs/UsuarioCreateOrConnectWithoutPedidoInput";
import { UsuarioCreateWithoutPedidoInput } from "../inputs/UsuarioCreateWithoutPedidoInput";
import { UsuarioUpdateWithoutPedidoInput } from "../inputs/UsuarioUpdateWithoutPedidoInput";
import { UsuarioUpsertWithoutPedidoInput } from "../inputs/UsuarioUpsertWithoutPedidoInput";
import { UsuarioWhereUniqueInput } from "../inputs/UsuarioWhereUniqueInput";

@TypeGraphQL.InputType("UsuarioUpdateOneRequiredWithoutPedidoInput", {
  isAbstract: true
})
export class UsuarioUpdateOneRequiredWithoutPedidoInput {
  @TypeGraphQL.Field(_type => UsuarioCreateWithoutPedidoInput, {
    nullable: true
  })
  create?: UsuarioCreateWithoutPedidoInput | undefined;

  @TypeGraphQL.Field(_type => UsuarioCreateOrConnectWithoutPedidoInput, {
    nullable: true
  })
  connectOrCreate?: UsuarioCreateOrConnectWithoutPedidoInput | undefined;

  @TypeGraphQL.Field(_type => UsuarioUpsertWithoutPedidoInput, {
    nullable: true
  })
  upsert?: UsuarioUpsertWithoutPedidoInput | undefined;

  @TypeGraphQL.Field(_type => UsuarioWhereUniqueInput, {
    nullable: true
  })
  connect?: UsuarioWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UsuarioUpdateWithoutPedidoInput, {
    nullable: true
  })
  update?: UsuarioUpdateWithoutPedidoInput | undefined;
}
