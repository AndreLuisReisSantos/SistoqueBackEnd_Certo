import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UsuarioAvgAggregate } from "../outputs/UsuarioAvgAggregate";
import { UsuarioCountAggregate } from "../outputs/UsuarioCountAggregate";
import { UsuarioMaxAggregate } from "../outputs/UsuarioMaxAggregate";
import { UsuarioMinAggregate } from "../outputs/UsuarioMinAggregate";
import { UsuarioSumAggregate } from "../outputs/UsuarioSumAggregate";

@TypeGraphQL.ObjectType("AggregateUsuario", {
  isAbstract: true
})
export class AggregateUsuario {
  @TypeGraphQL.Field(_type => UsuarioCountAggregate, {
    nullable: true
  })
  _count!: UsuarioCountAggregate | null;

  @TypeGraphQL.Field(_type => UsuarioAvgAggregate, {
    nullable: true
  })
  _avg!: UsuarioAvgAggregate | null;

  @TypeGraphQL.Field(_type => UsuarioSumAggregate, {
    nullable: true
  })
  _sum!: UsuarioSumAggregate | null;

  @TypeGraphQL.Field(_type => UsuarioMinAggregate, {
    nullable: true
  })
  _min!: UsuarioMinAggregate | null;

  @TypeGraphQL.Field(_type => UsuarioMaxAggregate, {
    nullable: true
  })
  _max!: UsuarioMaxAggregate | null;
}
