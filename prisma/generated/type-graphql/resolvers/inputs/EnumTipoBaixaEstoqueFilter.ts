import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumTipoBaixaEstoqueFilter } from "../inputs/NestedEnumTipoBaixaEstoqueFilter";
import { TipoBaixaEstoque } from "../../enums/TipoBaixaEstoque";

@TypeGraphQL.InputType("EnumTipoBaixaEstoqueFilter", {
  isAbstract: true
})
export class EnumTipoBaixaEstoqueFilter {
  @TypeGraphQL.Field(_type => TipoBaixaEstoque, {
    nullable: true
  })
  equals?: "PERDA" | "ROUBO" | "RETIRADA" | undefined;

  @TypeGraphQL.Field(_type => [TipoBaixaEstoque], {
    nullable: true
  })
  in?: Array<"PERDA" | "ROUBO" | "RETIRADA"> | undefined;

  @TypeGraphQL.Field(_type => [TipoBaixaEstoque], {
    nullable: true
  })
  notIn?: Array<"PERDA" | "ROUBO" | "RETIRADA"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumTipoBaixaEstoqueFilter, {
    nullable: true
  })
  not?: NestedEnumTipoBaixaEstoqueFilter | undefined;
}
