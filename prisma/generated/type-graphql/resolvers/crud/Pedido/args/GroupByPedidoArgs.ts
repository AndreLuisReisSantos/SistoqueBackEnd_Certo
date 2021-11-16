import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PedidoOrderByWithAggregationInput } from "../../../inputs/PedidoOrderByWithAggregationInput";
import { PedidoScalarWhereWithAggregatesInput } from "../../../inputs/PedidoScalarWhereWithAggregatesInput";
import { PedidoWhereInput } from "../../../inputs/PedidoWhereInput";
import { PedidoScalarFieldEnum } from "../../../../enums/PedidoScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByPedidoArgs {
  @TypeGraphQL.Field(_type => PedidoWhereInput, {
    nullable: true
  })
  where?: PedidoWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PedidoOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: PedidoOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [PedidoScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "dataPedido" | "usuarioCpf">;

  @TypeGraphQL.Field(_type => PedidoScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: PedidoScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
