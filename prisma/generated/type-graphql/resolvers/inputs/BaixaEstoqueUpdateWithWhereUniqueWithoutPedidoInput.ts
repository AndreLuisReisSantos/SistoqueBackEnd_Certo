import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BaixaEstoqueUpdateWithoutPedidoInput } from "../inputs/BaixaEstoqueUpdateWithoutPedidoInput";
import { BaixaEstoqueWhereUniqueInput } from "../inputs/BaixaEstoqueWhereUniqueInput";

@TypeGraphQL.InputType("BaixaEstoqueUpdateWithWhereUniqueWithoutPedidoInput", {
  isAbstract: true
})
export class BaixaEstoqueUpdateWithWhereUniqueWithoutPedidoInput {
  @TypeGraphQL.Field(_type => BaixaEstoqueWhereUniqueInput, {
    nullable: false
  })
  where!: BaixaEstoqueWhereUniqueInput;

  @TypeGraphQL.Field(_type => BaixaEstoqueUpdateWithoutPedidoInput, {
    nullable: false
  })
  data!: BaixaEstoqueUpdateWithoutPedidoInput;
}
