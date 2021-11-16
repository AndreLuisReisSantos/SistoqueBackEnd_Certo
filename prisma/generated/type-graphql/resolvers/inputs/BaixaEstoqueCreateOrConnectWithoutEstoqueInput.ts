import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BaixaEstoqueCreateWithoutEstoqueInput } from "../inputs/BaixaEstoqueCreateWithoutEstoqueInput";
import { BaixaEstoqueWhereUniqueInput } from "../inputs/BaixaEstoqueWhereUniqueInput";

@TypeGraphQL.InputType("BaixaEstoqueCreateOrConnectWithoutEstoqueInput", {
  isAbstract: true
})
export class BaixaEstoqueCreateOrConnectWithoutEstoqueInput {
  @TypeGraphQL.Field(_type => BaixaEstoqueWhereUniqueInput, {
    nullable: false
  })
  where!: BaixaEstoqueWhereUniqueInput;

  @TypeGraphQL.Field(_type => BaixaEstoqueCreateWithoutEstoqueInput, {
    nullable: false
  })
  create!: BaixaEstoqueCreateWithoutEstoqueInput;
}
