import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EstoqueCreateWithoutBaixaEstoqueInput } from "../inputs/EstoqueCreateWithoutBaixaEstoqueInput";
import { EstoqueWhereUniqueInput } from "../inputs/EstoqueWhereUniqueInput";

@TypeGraphQL.InputType("EstoqueCreateOrConnectWithoutBaixaEstoqueInput", {
  isAbstract: true
})
export class EstoqueCreateOrConnectWithoutBaixaEstoqueInput {
  @TypeGraphQL.Field(_type => EstoqueWhereUniqueInput, {
    nullable: false
  })
  where!: EstoqueWhereUniqueInput;

  @TypeGraphQL.Field(_type => EstoqueCreateWithoutBaixaEstoqueInput, {
    nullable: false
  })
  create!: EstoqueCreateWithoutBaixaEstoqueInput;
}
