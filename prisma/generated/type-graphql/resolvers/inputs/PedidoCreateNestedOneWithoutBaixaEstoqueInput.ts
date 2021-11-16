import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PedidoCreateOrConnectWithoutBaixaEstoqueInput } from "../inputs/PedidoCreateOrConnectWithoutBaixaEstoqueInput";
import { PedidoCreateWithoutBaixaEstoqueInput } from "../inputs/PedidoCreateWithoutBaixaEstoqueInput";
import { PedidoWhereUniqueInput } from "../inputs/PedidoWhereUniqueInput";

@TypeGraphQL.InputType("PedidoCreateNestedOneWithoutBaixaEstoqueInput", {
  isAbstract: true
})
export class PedidoCreateNestedOneWithoutBaixaEstoqueInput {
  @TypeGraphQL.Field(_type => PedidoCreateWithoutBaixaEstoqueInput, {
    nullable: true
  })
  create?: PedidoCreateWithoutBaixaEstoqueInput | undefined;

  @TypeGraphQL.Field(_type => PedidoCreateOrConnectWithoutBaixaEstoqueInput, {
    nullable: true
  })
  connectOrCreate?: PedidoCreateOrConnectWithoutBaixaEstoqueInput | undefined;

  @TypeGraphQL.Field(_type => PedidoWhereUniqueInput, {
    nullable: true
  })
  connect?: PedidoWhereUniqueInput | undefined;
}
