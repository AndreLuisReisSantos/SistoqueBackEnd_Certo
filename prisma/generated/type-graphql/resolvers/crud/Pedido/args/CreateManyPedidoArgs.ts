import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PedidoCreateManyInput } from "../../../inputs/PedidoCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyPedidoArgs {
  @TypeGraphQL.Field(_type => [PedidoCreateManyInput], {
    nullable: false
  })
  data!: PedidoCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
