import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UsuarioCreateNestedOneWithoutPedidoInput } from "../inputs/UsuarioCreateNestedOneWithoutPedidoInput";

@TypeGraphQL.InputType("PedidoCreateWithoutBaixaEstoqueInput", {
  isAbstract: true
})
export class PedidoCreateWithoutBaixaEstoqueInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  dataPedido?: Date | undefined;

  @TypeGraphQL.Field(_type => UsuarioCreateNestedOneWithoutPedidoInput, {
    nullable: false
  })
  Usuario!: UsuarioCreateNestedOneWithoutPedidoInput;
}
