import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PedidoCreateManyUsuarioInput } from "../inputs/PedidoCreateManyUsuarioInput";

@TypeGraphQL.InputType("PedidoCreateManyUsuarioInputEnvelope", {
  isAbstract: true
})
export class PedidoCreateManyUsuarioInputEnvelope {
  @TypeGraphQL.Field(_type => [PedidoCreateManyUsuarioInput], {
    nullable: false
  })
  data!: PedidoCreateManyUsuarioInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
