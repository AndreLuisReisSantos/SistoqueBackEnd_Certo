import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PedidoAvgAggregate } from "../outputs/PedidoAvgAggregate";
import { PedidoCountAggregate } from "../outputs/PedidoCountAggregate";
import { PedidoMaxAggregate } from "../outputs/PedidoMaxAggregate";
import { PedidoMinAggregate } from "../outputs/PedidoMinAggregate";
import { PedidoSumAggregate } from "../outputs/PedidoSumAggregate";

@TypeGraphQL.ObjectType("PedidoGroupBy", {
  isAbstract: true
})
export class PedidoGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  dataPedido!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  usuarioCpf!: string;

  @TypeGraphQL.Field(_type => PedidoCountAggregate, {
    nullable: true
  })
  _count!: PedidoCountAggregate | null;

  @TypeGraphQL.Field(_type => PedidoAvgAggregate, {
    nullable: true
  })
  _avg!: PedidoAvgAggregate | null;

  @TypeGraphQL.Field(_type => PedidoSumAggregate, {
    nullable: true
  })
  _sum!: PedidoSumAggregate | null;

  @TypeGraphQL.Field(_type => PedidoMinAggregate, {
    nullable: true
  })
  _min!: PedidoMinAggregate | null;

  @TypeGraphQL.Field(_type => PedidoMaxAggregate, {
    nullable: true
  })
  _max!: PedidoMaxAggregate | null;
}
