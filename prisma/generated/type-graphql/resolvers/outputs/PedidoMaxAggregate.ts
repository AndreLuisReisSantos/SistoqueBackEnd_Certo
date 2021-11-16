import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("PedidoMaxAggregate", {
  isAbstract: true
})
export class PedidoMaxAggregate {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id!: number | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  dataPedido!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  usuarioCpf!: string | null;
}
