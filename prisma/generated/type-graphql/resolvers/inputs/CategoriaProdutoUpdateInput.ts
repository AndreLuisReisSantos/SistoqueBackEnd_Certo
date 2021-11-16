import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProdutoUpdateManyWithoutCategoriaInput } from "../inputs/ProdutoUpdateManyWithoutCategoriaInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("CategoriaProdutoUpdateInput", {
  isAbstract: true
})
export class CategoriaProdutoUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  nome?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => ProdutoUpdateManyWithoutCategoriaInput, {
    nullable: true
  })
  Produto?: ProdutoUpdateManyWithoutCategoriaInput | undefined;
}
