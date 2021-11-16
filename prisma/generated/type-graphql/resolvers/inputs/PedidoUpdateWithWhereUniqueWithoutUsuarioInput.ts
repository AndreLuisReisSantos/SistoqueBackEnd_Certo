import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PedidoUpdateWithoutUsuarioInput } from "../inputs/PedidoUpdateWithoutUsuarioInput";
import { PedidoWhereUniqueInput } from "../inputs/PedidoWhereUniqueInput";

@TypeGraphQL.InputType("PedidoUpdateWithWhereUniqueWithoutUsuarioInput", {
  isAbstract: true
})
export class PedidoUpdateWithWhereUniqueWithoutUsuarioInput {
  @TypeGraphQL.Field(_type => PedidoWhereUniqueInput, {
    nullable: false
  })
  where!: PedidoWhereUniqueInput;

  @TypeGraphQL.Field(_type => PedidoUpdateWithoutUsuarioInput, {
    nullable: false
  })
  data!: PedidoUpdateWithoutUsuarioInput;
}
