import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BaixaEstoqueCreateWithoutPedidoInput } from "../inputs/BaixaEstoqueCreateWithoutPedidoInput";
import { BaixaEstoqueWhereUniqueInput } from "../inputs/BaixaEstoqueWhereUniqueInput";

@TypeGraphQL.InputType("BaixaEstoqueCreateOrConnectWithoutPedidoInput", {
  isAbstract: true
})
export class BaixaEstoqueCreateOrConnectWithoutPedidoInput {
  @TypeGraphQL.Field(_type => BaixaEstoqueWhereUniqueInput, {
    nullable: false
  })
  where!: BaixaEstoqueWhereUniqueInput;

  @TypeGraphQL.Field(_type => BaixaEstoqueCreateWithoutPedidoInput, {
    nullable: false
  })
  create!: BaixaEstoqueCreateWithoutPedidoInput;
}
