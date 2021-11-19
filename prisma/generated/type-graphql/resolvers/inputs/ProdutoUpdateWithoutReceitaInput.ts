import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoriaProdutoUpdateOneWithoutProdutoInput } from "../inputs/CategoriaProdutoUpdateOneWithoutProdutoInput";
import { EstoqueUpdateManyWithoutProdutoInput } from "../inputs/EstoqueUpdateManyWithoutProdutoInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("ProdutoUpdateWithoutReceitaInput", {
  isAbstract: true
})
export class ProdutoUpdateWithoutReceitaInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  nome?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  descricao?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  unidadeMedida?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => CategoriaProdutoUpdateOneWithoutProdutoInput, {
    nullable: true
  })
  categoria?: CategoriaProdutoUpdateOneWithoutProdutoInput | undefined;

  @TypeGraphQL.Field(_type => EstoqueUpdateManyWithoutProdutoInput, {
    nullable: true
  })
  Estoque?: EstoqueUpdateManyWithoutProdutoInput | undefined;
}
