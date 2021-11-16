import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("PedidoCreateManyInput", {
  isAbstract: true
})
export class PedidoCreateManyInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  dataPedido?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  usuarioCpf!: string;
}
