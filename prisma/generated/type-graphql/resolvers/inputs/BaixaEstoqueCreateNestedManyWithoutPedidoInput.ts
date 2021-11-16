import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BaixaEstoqueCreateManyPedidoInputEnvelope } from "../inputs/BaixaEstoqueCreateManyPedidoInputEnvelope";
import { BaixaEstoqueCreateOrConnectWithoutPedidoInput } from "../inputs/BaixaEstoqueCreateOrConnectWithoutPedidoInput";
import { BaixaEstoqueCreateWithoutPedidoInput } from "../inputs/BaixaEstoqueCreateWithoutPedidoInput";
import { BaixaEstoqueWhereUniqueInput } from "../inputs/BaixaEstoqueWhereUniqueInput";

@TypeGraphQL.InputType("BaixaEstoqueCreateNestedManyWithoutPedidoInput", {
  isAbstract: true
})
export class BaixaEstoqueCreateNestedManyWithoutPedidoInput {
  @TypeGraphQL.Field(_type => [BaixaEstoqueCreateWithoutPedidoInput], {
    nullable: true
  })
  create?: BaixaEstoqueCreateWithoutPedidoInput[] | undefined;

  @TypeGraphQL.Field(_type => [BaixaEstoqueCreateOrConnectWithoutPedidoInput], {
    nullable: true
  })
  connectOrCreate?: BaixaEstoqueCreateOrConnectWithoutPedidoInput[] | undefined;

  @TypeGraphQL.Field(_type => BaixaEstoqueCreateManyPedidoInputEnvelope, {
    nullable: true
  })
  createMany?: BaixaEstoqueCreateManyPedidoInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [BaixaEstoqueWhereUniqueInput], {
    nullable: true
  })
  connect?: BaixaEstoqueWhereUniqueInput[] | undefined;
}
