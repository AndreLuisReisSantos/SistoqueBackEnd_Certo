import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BaixaEstoqueAvgAggregate } from "../outputs/BaixaEstoqueAvgAggregate";
import { BaixaEstoqueCountAggregate } from "../outputs/BaixaEstoqueCountAggregate";
import { BaixaEstoqueMaxAggregate } from "../outputs/BaixaEstoqueMaxAggregate";
import { BaixaEstoqueMinAggregate } from "../outputs/BaixaEstoqueMinAggregate";
import { BaixaEstoqueSumAggregate } from "../outputs/BaixaEstoqueSumAggregate";

@TypeGraphQL.ObjectType("AggregateBaixaEstoque", {
  isAbstract: true
})
export class AggregateBaixaEstoque {
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
