import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EstoqueOrderByWithAggregationInput } from "../../../inputs/EstoqueOrderByWithAggregationInput";
import { EstoqueScalarWhereWithAggregatesInput } from "../../../inputs/EstoqueScalarWhereWithAggregatesInput";
import { EstoqueWhereInput } from "../../../inputs/EstoqueWhereInput";
import { EstoqueScalarFieldEnum } from "../../../../enums/EstoqueScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByEstoqueArgs {
  @TypeGraphQL.Field(_type => EstoqueWhereInput, {
    nullable: true
  })
  where?: EstoqueWhereInput | undefined;

  @TypeGraphQL.Field(_type => [EstoqueOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: EstoqueOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [EstoqueScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "quantidadeProduto" | "produtoId" | "dataRecebimento" | "dataVencimento" | "marca" | "preco" | "fornecedorId">;

  @TypeGraphQL.Field(_type => EstoqueScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: EstoqueScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
