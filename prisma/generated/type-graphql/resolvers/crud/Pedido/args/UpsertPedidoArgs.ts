import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PedidoCreateInput } from "../../../inputs/PedidoCreateInput";
import { PedidoUpdateInput } from "../../../inputs/PedidoUpdateInput";
import { PedidoWhereUniqueInput } from "../../../inputs/PedidoWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertPedidoArgs {
  @TypeGraphQL.Field(_type => PedidoWhereUniqueInput, {
    nullable: false
  })
  where!: PedidoWhereUniqueInput;

  @TypeGraphQL.Field(_type => PedidoCreateInput, {
    nullable: false
  })
  create!: PedidoCreateInput;

  @TypeGraphQL.Field(_type => PedidoUpdateInput, {
    nullable: false
  })
  update!: PedidoUpdateInput;
}
