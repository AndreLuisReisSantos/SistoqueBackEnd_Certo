import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("RepresentanteMaxAggregate", {
  isAbstract: true
})
export class RepresentanteMaxAggregate {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  nome!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  celular!: string | null;
}
