import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PedidoCreateWithoutUsuarioInput } from "../inputs/PedidoCreateWithoutUsuarioInput";
import { PedidoUpdateWithoutUsuarioInput } from "../inputs/PedidoUpdateWithoutUsuarioInput";
import { PedidoWhereUniqueInput } from "../inputs/PedidoWhereUniqueInput";

@TypeGraphQL.InputType("PedidoUpsertWithWhereUniqueWithoutUsuarioInput", {
  isAbstract: true
})
export class PedidoUpsertWithWhereUniqueWithoutUsuarioInput {
  @TypeGraphQL.Field(_type => PedidoWhereUniqueInput, {
    nullable: false
  })
  where!: PedidoWhereUniqueInput;

  @TypeGraphQL.Field(_type => PedidoUpdateWithoutUsuarioInput, {
    nullable: false
  })
  update!: PedidoUpdateWithoutUsuarioInput;

  @TypeGraphQL.Field(_type => PedidoCreateWithoutUsuarioInput, {
    nullable: false
  })
  create!: PedidoCreateWithoutUsuarioInput;
}
