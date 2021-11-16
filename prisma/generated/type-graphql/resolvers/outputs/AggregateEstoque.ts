import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EstoqueAvgAggregate } from "../outputs/EstoqueAvgAggregate";
import { EstoqueCountAggregate } from "../outputs/EstoqueCountAggregate";
import { EstoqueMaxAggregate } from "../outputs/EstoqueMaxAggregate";
import { EstoqueMinAggregate } from "../outputs/EstoqueMinAggregate";
import { EstoqueSumAggregate } from "../outputs/EstoqueSumAggregate";

@TypeGraphQL.ObjectType("AggregateEstoque", {
  isAbstract: true
})
export class AggregateEstoque {
  @TypeGraphQL.Field(_type => EstoqueCountAggregate, {
    nullable: true
  })
  _count!: EstoqueCountAggregate | null;

  @TypeGraphQL.Field(_type => EstoqueAvgAggregate, {
    nullable: true
  })
  _avg!: EstoqueAvgAggregate | null;

  @TypeGraphQL.Field(_type => EstoqueSumAggregate, {
    nullable: true
  })
  _sum!: EstoqueSumAggregate | null;

  @TypeGraphQL.Field(_type => EstoqueMinAggregate, {
    nullable: true
  })
  _min!: EstoqueMinAggregate | null;

  @TypeGraphQL.Field(_type => EstoqueMaxAggregate, {
    nullable: true
  })
  _max!: EstoqueMaxAggregate | null;
}
