import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EstoqueCreateNestedOneWithoutBaixaEstoqueInput } from "../inputs/EstoqueCreateNestedOneWithoutBaixaEstoqueInput";
import { PedidoCreateNestedOneWithoutBaixaEstoqueInput } from "../inputs/PedidoCreateNestedOneWithoutBaixaEstoqueInput";
import { TipoBaixaEstoque } from "../../enums/TipoBaixaEstoque";

@TypeGraphQL.InputType("BaixaEstoqueCreateInput", {
  isAbstract: true
})
export class BaixaEstoqueCreateInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  quantidadeProduto!: number;

  @TypeGraphQL.Field(_type => TipoBaixaEstoque, {
    nullable: false
  })
  tipo!: "PERDA" | "ROUBO" | "RETIRADA";

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  foto?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  motivo?: string | undefined;

  @TypeGraphQL.Field(_type => EstoqueCreateNestedOneWithoutBaixaEstoqueInput, {
    nullable: false
  })
  Estoque!: EstoqueCreateNestedOneWithoutBaixaEstoqueInput;

  @TypeGraphQL.Field(_type => PedidoCreateNestedOneWithoutBaixaEstoqueInput, {
    nullable: true
  })
  Pedido?: PedidoCreateNestedOneWithoutBaixaEstoqueInput | undefined;
}
