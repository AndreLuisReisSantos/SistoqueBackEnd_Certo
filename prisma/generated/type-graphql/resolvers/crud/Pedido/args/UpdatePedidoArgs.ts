import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PedidoUpdateInput } from "../../../inputs/PedidoUpdateInput";
import { PedidoWhereUniqueInput } from "../../../inputs/PedidoWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdatePedidoArgs {
  @TypeGraphQL.Field(_type => PedidoUpdateInput, {
    nullable: false
  })
  data!: PedidoUpdateInput;

  @TypeGraphQL.Field(_type => PedidoWhereUniqueInput, {
    nullable: false
  })
  where!: PedidoWhereUniqueInput;
}
