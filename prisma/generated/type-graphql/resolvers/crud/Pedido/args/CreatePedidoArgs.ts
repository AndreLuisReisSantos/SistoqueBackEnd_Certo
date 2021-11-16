import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PedidoCreateInput } from "../../../inputs/PedidoCreateInput";

@TypeGraphQL.ArgsType()
export class CreatePedidoArgs {
  @TypeGraphQL.Field(_type => PedidoCreateInput, {
    nullable: false
  })
  data!: PedidoCreateInput;
}
