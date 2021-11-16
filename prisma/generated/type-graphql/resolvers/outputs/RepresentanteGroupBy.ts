import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RepresentanteAvgAggregate } from "../outputs/RepresentanteAvgAggregate";
import { RepresentanteCountAggregate } from "../outputs/RepresentanteCountAggregate";
import { RepresentanteMaxAggregate } from "../outputs/RepresentanteMaxAggregate";
import { RepresentanteMinAggregate } from "../outputs/RepresentanteMinAggregate";
import { RepresentanteSumAggregate } from "../outputs/RepresentanteSumAggregate";

@TypeGraphQL.ObjectType("RepresentanteGroupBy", {
  isAbstract: true
})
export class RepresentanteGroupBy {
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
  celular!: string;

  @TypeGraphQL.Field(_type => RepresentanteCountAggregate, {
    nullable: true
  })
  _count!: RepresentanteCountAggregate | null;

  @TypeGraphQL.Field(_type => RepresentanteAvgAggregate, {
    nullable: true
  })
  _avg!: RepresentanteAvgAggregate | null;

  @TypeGraphQL.Field(_type => RepresentanteSumAggregate, {
    nullable: true
  })
  _sum!: RepresentanteSumAggregate | null;

  @TypeGraphQL.Field(_type => RepresentanteMinAggregate, {
    nullable: true
  })
  _min!: RepresentanteMinAggregate | null;

  @TypeGraphQL.Field(_type => RepresentanteMaxAggregate, {
    nullable: true
  })
  _max!: RepresentanteMaxAggregate | null;
}
