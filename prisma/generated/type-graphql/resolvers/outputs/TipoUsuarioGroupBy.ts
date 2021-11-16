import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TipoUsuarioAvgAggregate } from "../outputs/TipoUsuarioAvgAggregate";
import { TipoUsuarioCountAggregate } from "../outputs/TipoUsuarioCountAggregate";
import { TipoUsuarioMaxAggregate } from "../outputs/TipoUsuarioMaxAggregate";
import { TipoUsuarioMinAggregate } from "../outputs/TipoUsuarioMinAggregate";
import { TipoUsuarioSumAggregate } from "../outputs/TipoUsuarioSumAggregate";

@TypeGraphQL.ObjectType("TipoUsuarioGroupBy", {
  isAbstract: true
})
export class TipoUsuarioGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  nome!: string;

  @TypeGraphQL.Field(_type => TipoUsuarioCountAggregate, {
    nullable: true
  })
  _count!: TipoUsuarioCountAggregate | null;

  @TypeGraphQL.Field(_type => TipoUsuarioAvgAggregate, {
    nullable: true
  })
  _avg!: TipoUsuarioAvgAggregate | null;

  @TypeGraphQL.Field(_type => TipoUsuarioSumAggregate, {
    nullable: true
  })
  _sum!: TipoUsuarioSumAggregate | null;

  @TypeGraphQL.Field(_type => TipoUsuarioMinAggregate, {
    nullable: true
  })
  _min!: TipoUsuarioMinAggregate | null;

  @TypeGraphQL.Field(_type => TipoUsuarioMaxAggregate, {
    nullable: true
  })
  _max!: TipoUsuarioMaxAggregate | null;
}
