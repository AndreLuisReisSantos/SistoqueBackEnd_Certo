import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PedidoOrderByWithRelationInput } from "../../../inputs/PedidoOrderByWithRelationInput";
import { PedidoWhereInput } from "../../../inputs/PedidoWhereInput";
import { PedidoWhereUniqueInput } from "../../../inputs/PedidoWhereUniqueInput";
import { PedidoScalarFieldEnum } from "../../../../enums/PedidoScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstPedidoArgs {
  @TypeGraphQL.Field(_type => PedidoWhereInput, {
    nullable: true
  })
  where?: PedidoWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PedidoOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: PedidoOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => PedidoWhereUniqueInput, {
    nullable: true
  })
  cursor?: PedidoWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [PedidoScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "dataPedido" | "usuarioCpf"> | undefined;
}
