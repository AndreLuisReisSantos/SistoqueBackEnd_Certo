import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BaixaEstoqueOrderByWithRelationInput } from "../../../inputs/BaixaEstoqueOrderByWithRelationInput";
import { BaixaEstoqueWhereInput } from "../../../inputs/BaixaEstoqueWhereInput";
import { BaixaEstoqueWhereUniqueInput } from "../../../inputs/BaixaEstoqueWhereUniqueInput";
import { BaixaEstoqueScalarFieldEnum } from "../../../../enums/BaixaEstoqueScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class PedidoBaixaEstoqueArgs {
  @TypeGraphQL.Field(_type => BaixaEstoqueWhereInput, {
    nullable: true
  })
  where?: BaixaEstoqueWhereInput | undefined;

  @TypeGraphQL.Field(_type => [BaixaEstoqueOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: BaixaEstoqueOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => BaixaEstoqueWhereUniqueInput, {
    nullable: true
  })
  cursor?: BaixaEstoqueWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [BaixaEstoqueScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "quantidadeProduto" | "tipo" | "foto" | "motivo" | "estoqueId" | "pedidoId"> | undefined;
}
