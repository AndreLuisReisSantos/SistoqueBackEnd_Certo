import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BaixaEstoqueUpdateWithoutEstoqueInput } from "../inputs/BaixaEstoqueUpdateWithoutEstoqueInput";
import { BaixaEstoqueWhereUniqueInput } from "../inputs/BaixaEstoqueWhereUniqueInput";

@TypeGraphQL.InputType("BaixaEstoqueUpdateWithWhereUniqueWithoutEstoqueInput", {
  isAbstract: true
})
export class BaixaEstoqueUpdateWithWhereUniqueWithoutEstoqueInput {
  @TypeGraphQL.Field(_type => BaixaEstoqueWhereUniqueInput, {
    nullable: false
  })
  where!: BaixaEstoqueWhereUniqueInput;

  @TypeGraphQL.Field(_type => BaixaEstoqueUpdateWithoutEstoqueInput, {
    nullable: false
  })
  data!: BaixaEstoqueUpdateWithoutEstoqueInput;
}
