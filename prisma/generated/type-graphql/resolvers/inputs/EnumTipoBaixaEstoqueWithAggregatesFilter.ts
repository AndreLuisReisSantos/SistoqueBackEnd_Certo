import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumTipoBaixaEstoqueFilter } from "../inputs/NestedEnumTipoBaixaEstoqueFilter";
import { NestedEnumTipoBaixaEstoqueWithAggregatesFilter } from "../inputs/NestedEnumTipoBaixaEstoqueWithAggregatesFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { TipoBaixaEstoque } from "../../enums/TipoBaixaEstoque";

@TypeGraphQL.InputType("EnumTipoBaixaEstoqueWithAggregatesFilter", {
  isAbstract: true
})
export class EnumTipoBaixaEstoqueWithAggregatesFilter {
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

  @TypeGraphQL.Field(_type => NestedEnumTipoBaixaEstoqueWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumTipoBaixaEstoqueWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumTipoBaixaEstoqueFilter, {
    nullable: true
  })
  _min?: NestedEnumTipoBaixaEstoqueFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumTipoBaixaEstoqueFilter, {
    nullable: true
  })
  _max?: NestedEnumTipoBaixaEstoqueFilter | undefined;
}
