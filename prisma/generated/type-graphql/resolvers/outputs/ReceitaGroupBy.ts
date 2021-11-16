import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReceitaAvgAggregate } from "../outputs/ReceitaAvgAggregate";
import { ReceitaCountAggregate } from "../outputs/ReceitaCountAggregate";
import { ReceitaMaxAggregate } from "../outputs/ReceitaMaxAggregate";
import { ReceitaMinAggregate } from "../outputs/ReceitaMinAggregate";
import { ReceitaSumAggregate } from "../outputs/ReceitaSumAggregate";

@TypeGraphQL.ObjectType("ReceitaGroupBy", {
  isAbstract: true
})
export class ReceitaGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  nome!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  tipo!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  descricao!: string;

  @TypeGraphQL.Field(_type => ReceitaCountAggregate, {
    nullable: true
  })
  _count!: ReceitaCountAggregate | null;

  @TypeGraphQL.Field(_type => ReceitaAvgAggregate, {
    nullable: true
  })
  _avg!: ReceitaAvgAggregate | null;

  @TypeGraphQL.Field(_type => ReceitaSumAggregate, {
    nullable: true
  })
  _sum!: ReceitaSumAggregate | null;

  @TypeGraphQL.Field(_type => ReceitaMinAggregate, {
    nullable: true
  })
  _min!: ReceitaMinAggregate | null;

  @TypeGraphQL.Field(_type => ReceitaMaxAggregate, {
    nullable: true
  })
  _max!: ReceitaMaxAggregate | null;
}
