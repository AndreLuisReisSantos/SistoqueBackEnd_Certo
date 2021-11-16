import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PedidoCreateWithoutBaixaEstoqueInput } from "../inputs/PedidoCreateWithoutBaixaEstoqueInput";
import { PedidoUpdateWithoutBaixaEstoqueInput } from "../inputs/PedidoUpdateWithoutBaixaEstoqueInput";

@TypeGraphQL.InputType("PedidoUpsertWithoutBaixaEstoqueInput", {
  isAbstract: true
})
export class PedidoUpsertWithoutBaixaEstoqueInput {
  @TypeGraphQL.Field(_type => PedidoUpdateWithoutBaixaEstoqueInput, {
    nullable: false
  })
  update!: PedidoUpdateWithoutBaixaEstoqueInput;

  @TypeGraphQL.Field(_type => PedidoCreateWithoutBaixaEstoqueInput, {
    nullable: false
  })
  create!: PedidoCreateWithoutBaixaEstoqueInput;
}
