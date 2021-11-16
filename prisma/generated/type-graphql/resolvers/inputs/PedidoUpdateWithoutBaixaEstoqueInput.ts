import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { UsuarioUpdateOneRequiredWithoutPedidoInput } from "../inputs/UsuarioUpdateOneRequiredWithoutPedidoInput";

@TypeGraphQL.InputType("PedidoUpdateWithoutBaixaEstoqueInput", {
  isAbstract: true
})
export class PedidoUpdateWithoutBaixaEstoqueInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  dataPedido?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UsuarioUpdateOneRequiredWithoutPedidoInput, {
    nullable: true
  })
  Usuario?: UsuarioUpdateOneRequiredWithoutPedidoInput | undefined;
}
