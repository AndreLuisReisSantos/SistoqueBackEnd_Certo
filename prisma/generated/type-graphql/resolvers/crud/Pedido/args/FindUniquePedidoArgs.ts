import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PedidoWhereUniqueInput } from "../../../inputs/PedidoWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniquePedidoArgs {
  @TypeGraphQL.Field(_type => PedidoWhereUniqueInput, {
    nullable: false
  })
  where!: PedidoWhereUniqueInput;
}
