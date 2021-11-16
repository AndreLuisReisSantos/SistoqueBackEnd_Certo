import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EnumTipoBaixaEstoqueFieldUpdateOperationsInput } from "../inputs/EnumTipoBaixaEstoqueFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { PedidoUpdateOneWithoutBaixaEstoqueInput } from "../inputs/PedidoUpdateOneWithoutBaixaEstoqueInput";

@TypeGraphQL.InputType("BaixaEstoqueUpdateWithoutEstoqueInput", {
  isAbstract: true
})
export class BaixaEstoqueUpdateWithoutEstoqueInput {
  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  quantidadeProduto?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => EnumTipoBaixaEstoqueFieldUpdateOperationsInput, {
    nullable: true
  })
  tipo?: EnumTipoBaixaEstoqueFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  foto?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  motivo?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => PedidoUpdateOneWithoutBaixaEstoqueInput, {
    nullable: true
  })
  Pedido?: PedidoUpdateOneWithoutBaixaEstoqueInput | undefined;
}
