import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BaixaEstoqueCreateNestedManyWithoutPedidoInput } from "../inputs/BaixaEstoqueCreateNestedManyWithoutPedidoInput";

@TypeGraphQL.InputType("PedidoCreateWithoutUsuarioInput", {
  isAbstract: true
})
export class PedidoCreateWithoutUsuarioInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  dataPedido?: Date | undefined;

  @TypeGraphQL.Field(_type => BaixaEstoqueCreateNestedManyWithoutPedidoInput, {
    nullable: true
  })
  BaixaEstoque?: BaixaEstoqueCreateNestedManyWithoutPedidoInput | undefined;
}
