import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EstoqueCreateOrConnectWithoutBaixaEstoqueInput } from "../inputs/EstoqueCreateOrConnectWithoutBaixaEstoqueInput";
import { EstoqueCreateWithoutBaixaEstoqueInput } from "../inputs/EstoqueCreateWithoutBaixaEstoqueInput";
import { EstoqueWhereUniqueInput } from "../inputs/EstoqueWhereUniqueInput";

@TypeGraphQL.InputType("EstoqueCreateNestedOneWithoutBaixaEstoqueInput", {
  isAbstract: true
})
export class EstoqueCreateNestedOneWithoutBaixaEstoqueInput {
  @TypeGraphQL.Field(_type => EstoqueCreateWithoutBaixaEstoqueInput, {
    nullable: true
  })
  create?: EstoqueCreateWithoutBaixaEstoqueInput | undefined;

  @TypeGraphQL.Field(_type => EstoqueCreateOrConnectWithoutBaixaEstoqueInput, {
    nullable: true
  })
  connectOrCreate?: EstoqueCreateOrConnectWithoutBaixaEstoqueInput | undefined;

  @TypeGraphQL.Field(_type => EstoqueWhereUniqueInput, {
    nullable: true
  })
  connect?: EstoqueWhereUniqueInput | undefined;
}
