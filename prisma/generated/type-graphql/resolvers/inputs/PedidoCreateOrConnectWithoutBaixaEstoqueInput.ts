import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PedidoCreateWithoutBaixaEstoqueInput } from "../inputs/PedidoCreateWithoutBaixaEstoqueInput";
import { PedidoWhereUniqueInput } from "../inputs/PedidoWhereUniqueInput";

@TypeGraphQL.InputType("PedidoCreateOrConnectWithoutBaixaEstoqueInput", {
  isAbstract: true
})
export class PedidoCreateOrConnectWithoutBaixaEstoqueInput {
  @TypeGraphQL.Field(_type => PedidoWhereUniqueInput, {
    nullable: false
  })
  where!: PedidoWhereUniqueInput;

  @TypeGraphQL.Field(_type => PedidoCreateWithoutBaixaEstoqueInput, {
    nullable: false
  })
  create!: PedidoCreateWithoutBaixaEstoqueInput;
}
