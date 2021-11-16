import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PedidoScalarWhereInput } from "../inputs/PedidoScalarWhereInput";
import { PedidoUpdateManyMutationInput } from "../inputs/PedidoUpdateManyMutationInput";

@TypeGraphQL.InputType("PedidoUpdateManyWithWhereWithoutUsuarioInput", {
  isAbstract: true
})
export class PedidoUpdateManyWithWhereWithoutUsuarioInput {
  @TypeGraphQL.Field(_type => PedidoScalarWhereInput, {
    nullable: false
  })
  where!: PedidoScalarWhereInput;

  @TypeGraphQL.Field(_type => PedidoUpdateManyMutationInput, {
    nullable: false
  })
  data!: PedidoUpdateManyMutationInput;
}
