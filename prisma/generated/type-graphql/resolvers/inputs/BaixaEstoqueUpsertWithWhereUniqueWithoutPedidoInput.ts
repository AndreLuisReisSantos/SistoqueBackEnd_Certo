import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BaixaEstoqueCreateWithoutPedidoInput } from "../inputs/BaixaEstoqueCreateWithoutPedidoInput";
import { BaixaEstoqueUpdateWithoutPedidoInput } from "../inputs/BaixaEstoqueUpdateWithoutPedidoInput";
import { BaixaEstoqueWhereUniqueInput } from "../inputs/BaixaEstoqueWhereUniqueInput";

@TypeGraphQL.InputType("BaixaEstoqueUpsertWithWhereUniqueWithoutPedidoInput", {
  isAbstract: true
})
export class BaixaEstoqueUpsertWithWhereUniqueWithoutPedidoInput {
  @TypeGraphQL.Field(_type => BaixaEstoqueWhereUniqueInput, {
    nullable: false
  })
  where!: BaixaEstoqueWhereUniqueInput;

  @TypeGraphQL.Field(_type => BaixaEstoqueUpdateWithoutPedidoInput, {
    nullable: false
  })
  update!: BaixaEstoqueUpdateWithoutPedidoInput;

  @TypeGraphQL.Field(_type => BaixaEstoqueCreateWithoutPedidoInput, {
    nullable: false
  })
  create!: BaixaEstoqueCreateWithoutPedidoInput;
}
