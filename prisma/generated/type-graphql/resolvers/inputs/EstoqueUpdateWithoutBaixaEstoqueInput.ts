import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { FloatFieldUpdateOperationsInput } from "../inputs/FloatFieldUpdateOperationsInput";
import { FornecedorUpdateOneRequiredWithoutEstoqueInput } from "../inputs/FornecedorUpdateOneRequiredWithoutEstoqueInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { ProdutoUpdateOneRequiredWithoutEstoqueInput } from "../inputs/ProdutoUpdateOneRequiredWithoutEstoqueInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("EstoqueUpdateWithoutBaixaEstoqueInput", {
  isAbstract: true
})
export class EstoqueUpdateWithoutBaixaEstoqueInput {
  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  quantidadeProduto?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  dataRecebimento?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  dataVencimento?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  marca?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => FloatFieldUpdateOperationsInput, {
    nullable: true
  })
  preco?: FloatFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => ProdutoUpdateOneRequiredWithoutEstoqueInput, {
    nullable: true
  })
  produto?: ProdutoUpdateOneRequiredWithoutEstoqueInput | undefined;

  @TypeGraphQL.Field(_type => FornecedorUpdateOneRequiredWithoutEstoqueInput, {
    nullable: true
  })
  fornecedor?: FornecedorUpdateOneRequiredWithoutEstoqueInput | undefined;
}
