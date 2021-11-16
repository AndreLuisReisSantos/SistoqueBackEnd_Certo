import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TipoBaixaEstoque } from "../../enums/TipoBaixaEstoque";

@TypeGraphQL.InputType("BaixaEstoqueCreateManyPedidoInput", {
  isAbstract: true
})
export class BaixaEstoqueCreateManyPedidoInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

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

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  estoqueId!: number;
}
