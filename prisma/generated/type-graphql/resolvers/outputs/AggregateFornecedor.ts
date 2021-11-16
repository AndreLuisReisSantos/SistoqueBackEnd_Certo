import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FornecedorAvgAggregate } from "../outputs/FornecedorAvgAggregate";
import { FornecedorCountAggregate } from "../outputs/FornecedorCountAggregate";
import { FornecedorMaxAggregate } from "../outputs/FornecedorMaxAggregate";
import { FornecedorMinAggregate } from "../outputs/FornecedorMinAggregate";
import { FornecedorSumAggregate } from "../outputs/FornecedorSumAggregate";

@TypeGraphQL.ObjectType("AggregateFornecedor", {
  isAbstract: true
})
export class AggregateFornecedor {
  @TypeGraphQL.Field(_type => FornecedorCountAggregate, {
    nullable: true
  })
  _count!: FornecedorCountAggregate | null;

  @TypeGraphQL.Field(_type => FornecedorAvgAggregate, {
    nullable: true
  })
  _avg!: FornecedorAvgAggregate | null;

  @TypeGraphQL.Field(_type => FornecedorSumAggregate, {
    nullable: true
  })
  _sum!: FornecedorSumAggregate | null;

  @TypeGraphQL.Field(_type => FornecedorMinAggregate, {
    nullable: true
  })
  _min!: FornecedorMinAggregate | null;

  @TypeGraphQL.Field(_type => FornecedorMaxAggregate, {
    nullable: true
  })
  _max!: FornecedorMaxAggregate | null;
}
