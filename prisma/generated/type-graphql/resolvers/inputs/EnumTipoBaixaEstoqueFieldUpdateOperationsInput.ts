import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TipoBaixaEstoque } from "../../enums/TipoBaixaEstoque";

@TypeGraphQL.InputType("EnumTipoBaixaEstoqueFieldUpdateOperationsInput", {
  isAbstract: true
})
export class EnumTipoBaixaEstoqueFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => TipoBaixaEstoque, {
    nullable: true
  })
  set?: "PERDA" | "ROUBO" | "RETIRADA" | undefined;
}
