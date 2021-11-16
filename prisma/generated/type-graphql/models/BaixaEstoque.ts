import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Estoque } from "../models/Estoque";
import { Pedido } from "../models/Pedido";
import { TipoBaixaEstoque } from "../enums/TipoBaixaEstoque";

@TypeGraphQL.ObjectType("BaixaEstoque", {
  isAbstract: true
})
export class BaixaEstoque {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

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
  foto?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  motivo?: string | null;

  Estoque?: Estoque;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  estoqueId!: number;

  Pedido?: Pedido | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  pedidoId?: number | null;
}
