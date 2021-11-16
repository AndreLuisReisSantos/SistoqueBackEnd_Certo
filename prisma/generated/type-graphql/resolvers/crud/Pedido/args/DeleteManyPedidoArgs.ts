import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PedidoWhereInput } from "../../../inputs/PedidoWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyPedidoArgs {
  @TypeGraphQL.Field(_type => PedidoWhereInput, {
    nullable: true
  })
  where?: PedidoWhereInput | undefined;
}
