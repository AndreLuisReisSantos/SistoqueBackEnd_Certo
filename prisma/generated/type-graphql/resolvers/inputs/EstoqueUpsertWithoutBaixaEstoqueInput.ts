import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EstoqueCreateWithoutBaixaEstoqueInput } from "../inputs/EstoqueCreateWithoutBaixaEstoqueInput";
import { EstoqueUpdateWithoutBaixaEstoqueInput } from "../inputs/EstoqueUpdateWithoutBaixaEstoqueInput";

@TypeGraphQL.InputType("EstoqueUpsertWithoutBaixaEstoqueInput", {
  isAbstract: true
})
export class EstoqueUpsertWithoutBaixaEstoqueInput {
  @TypeGraphQL.Field(_type => EstoqueUpdateWithoutBaixaEstoqueInput, {
    nullable: false
  })
  update!: EstoqueUpdateWithoutBaixaEstoqueInput;

  @TypeGraphQL.Field(_type => EstoqueCreateWithoutBaixaEstoqueInput, {
    nullable: false
  })
  create!: EstoqueCreateWithoutBaixaEstoqueInput;
}
