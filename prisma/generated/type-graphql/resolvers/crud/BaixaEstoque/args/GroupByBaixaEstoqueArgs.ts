import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BaixaEstoqueOrderByWithAggregationInput } from "../../../inputs/BaixaEstoqueOrderByWithAggregationInput";
import { BaixaEstoqueScalarWhereWithAggregatesInput } from "../../../inputs/BaixaEstoqueScalarWhereWithAggregatesInput";
import { BaixaEstoqueWhereInput } from "../../../inputs/BaixaEstoqueWhereInput";
import { BaixaEstoqueScalarFieldEnum } from "../../../../enums/BaixaEstoqueScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByBaixaEstoqueArgs {
  @TypeGraphQL.Field(_type => BaixaEstoqueWhereInput, {
    nullable: true
  })
  where?: BaixaEstoqueWhereInput | undefined;

  @TypeGraphQL.Field(_type => [BaixaEstoqueOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: BaixaEstoqueOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [BaixaEstoqueScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "quantidadeProduto" | "tipo" | "foto" | "motivo" | "estoqueId" | "pedidoId">;

  @TypeGraphQL.Field(_type => BaixaEstoqueScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: BaixaEstoqueScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
