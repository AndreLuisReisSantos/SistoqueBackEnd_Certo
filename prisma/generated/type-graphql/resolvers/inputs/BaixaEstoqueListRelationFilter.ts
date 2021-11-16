import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BaixaEstoqueWhereInput } from "../inputs/BaixaEstoqueWhereInput";

@TypeGraphQL.InputType("BaixaEstoqueListRelationFilter", {
  isAbstract: true
})
export class BaixaEstoqueListRelationFilter {
  @TypeGraphQL.Field(_type => BaixaEstoqueWhereInput, {
    nullable: true
  })
  every?: BaixaEstoqueWhereInput | undefined;

  @TypeGraphQL.Field(_type => BaixaEstoqueWhereInput, {
    nullable: true
  })
  some?: BaixaEstoqueWhereInput | undefined;

  @TypeGraphQL.Field(_type => BaixaEstoqueWhereInput, {
    nullable: true
  })
  none?: BaixaEstoqueWhereInput | undefined;
}
