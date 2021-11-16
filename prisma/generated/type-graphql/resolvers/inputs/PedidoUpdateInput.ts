import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BaixaEstoqueUpdateManyWithoutPedidoInput } from "../inputs/BaixaEstoqueUpdateManyWithoutPedidoInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { UsuarioUpdateOneRequiredWithoutPedidoInput } from "../inputs/UsuarioUpdateOneRequiredWithoutPedidoInput";

@TypeGraphQL.InputType("PedidoUpdateInput", {
  isAbstract: true
})
export class PedidoUpdateInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  dataPedido?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BaixaEstoqueUpdateManyWithoutPedidoInput, {
    nullable: true
  })
  BaixaEstoque?: BaixaEstoqueUpdateManyWithoutPedidoInput | undefined;

  @TypeGraphQL.Field(_type => UsuarioUpdateOneRequiredWithoutPedidoInput, {
    nullable: true
  })
  Usuario?: UsuarioUpdateOneRequiredWithoutPedidoInput | undefined;
}
