import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PedidoUpdateManyMutationInput } from "../../../inputs/PedidoUpdateManyMutationInput";
import { PedidoWhereInput } from "../../../inputs/PedidoWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyPedidoArgs {
  @TypeGraphQL.Field(_type => PedidoUpdateManyMutationInput, {
    nullable: false
  })
  data!: PedidoUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => PedidoWhereInput, {
    nullable: true
  })
  where?: PedidoWhereInput | undefined;
}
