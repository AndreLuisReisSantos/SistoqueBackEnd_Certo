import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoriaProdutoUpdateOneRequiredWithoutProdutoInput } from "../inputs/CategoriaProdutoUpdateOneRequiredWithoutProdutoInput";
import { EnumUnidadeMedidaFieldUpdateOperationsInput } from "../inputs/EnumUnidadeMedidaFieldUpdateOperationsInput";
import { EstoqueUpdateManyWithoutProdutoInput } from "../inputs/EstoqueUpdateManyWithoutProdutoInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { ReceitaUpdateOneWithoutProdutosInput } from "../inputs/ReceitaUpdateOneWithoutProdutosInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("ProdutoUpdateInput", {
  isAbstract: true
})
export class ProdutoUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  nome?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  descricao?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => EnumUnidadeMedidaFieldUpdateOperationsInput, {
    nullable: true
  })
  unidadeMedida?: EnumUnidadeMedidaFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => CategoriaProdutoUpdateOneRequiredWithoutProdutoInput, {
    nullable: true
  })
  categoria?: CategoriaProdutoUpdateOneRequiredWithoutProdutoInput | undefined;

  @TypeGraphQL.Field(_type => EstoqueUpdateManyWithoutProdutoInput, {
    nullable: true
  })
  Estoque?: EstoqueUpdateManyWithoutProdutoInput | undefined;

  @TypeGraphQL.Field(_type => ReceitaUpdateOneWithoutProdutosInput, {
    nullable: true
  })
  Receita?: ReceitaUpdateOneWithoutProdutosInput | undefined;
}
