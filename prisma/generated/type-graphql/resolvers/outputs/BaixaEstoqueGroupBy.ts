import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BaixaEstoqueAvgAggregate } from "../outputs/BaixaEstoqueAvgAggregate";
import { BaixaEstoqueCountAggregate } from "../outputs/BaixaEstoqueCountAggregate";
import { BaixaEstoqueMaxAggregate } from "../outputs/BaixaEstoqueMaxAggregate";
import { BaixaEstoqueMinAggregate } from "../outputs/BaixaEstoqueMinAggregate";
import { BaixaEstoqueSumAggregate } from "../outputs/BaixaEstoqueSumAggregate";
import { TipoBaixaEstoque } from "../../enums/TipoBaixaEstoque";

@TypeGraphQL.ObjectType("BaixaEstoqueGroupBy", {
  isAbstract: true
})
export class BaixaEstoqueGroupBy {
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
  foto!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  motivo!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  estoqueId!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  pedidoId!: number | null;

  @TypeGraphQL.Field(_type => BaixaEstoqueCountAggregate, {
    nullable: true
  })
  _count!: BaixaEstoqueCountAggregate | null;

  @TypeGraphQL.Field(_type => BaixaEstoqueAvgAggregate, {
    nullable: true
  })
  _avg!: BaixaEstoqueAvgAggregate | null;

  @TypeGraphQL.Field(_type => BaixaEstoqueSumAggregate, {
    nullable: true
  })
  _sum!: BaixaEstoqueSumAggregate | null;

  @TypeGraphQL.Field(_type => BaixaEstoqueMinAggregate, {
    nullable: true
  })
  _min!: BaixaEstoqueMinAggregate | null;

  @TypeGraphQL.Field(_type => BaixaEstoqueMaxAggregate, {
    nullable: true
  })
  _max!: BaixaEstoqueMaxAggregate | null;
}
