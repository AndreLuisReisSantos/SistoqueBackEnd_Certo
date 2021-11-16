import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BaixaEstoqueCreateWithoutEstoqueInput } from "../inputs/BaixaEstoqueCreateWithoutEstoqueInput";
import { BaixaEstoqueUpdateWithoutEstoqueInput } from "../inputs/BaixaEstoqueUpdateWithoutEstoqueInput";
import { BaixaEstoqueWhereUniqueInput } from "../inputs/BaixaEstoqueWhereUniqueInput";

@TypeGraphQL.InputType("BaixaEstoqueUpsertWithWhereUniqueWithoutEstoqueInput", {
  isAbstract: true
})
export class BaixaEstoqueUpsertWithWhereUniqueWithoutEstoqueInput {
  @TypeGraphQL.Field(_type => BaixaEstoqueWhereUniqueInput, {
    nullable: false
  })
  where!: BaixaEstoqueWhereUniqueInput;

  @TypeGraphQL.Field(_type => BaixaEstoqueUpdateWithoutEstoqueInput, {
    nullable: false
  })
  update!: BaixaEstoqueUpdateWithoutEstoqueInput;

  @TypeGraphQL.Field(_type => BaixaEstoqueCreateWithoutEstoqueInput, {
    nullable: false
  })
  create!: BaixaEstoqueCreateWithoutEstoqueInput;
}
