import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProdutoOrderByWithAggregationInput } from "../../../inputs/ProdutoOrderByWithAggregationInput";
import { ProdutoScalarWhereWithAggregatesInput } from "../../../inputs/ProdutoScalarWhereWithAggregatesInput";
import { ProdutoWhereInput } from "../../../inputs/ProdutoWhereInput";
import { ProdutoScalarFieldEnum } from "../../../../enums/ProdutoScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByProdutoArgs {
  @TypeGraphQL.Field(_type => ProdutoWhereInput, {
    nullable: true
  })
  where?: ProdutoWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ProdutoOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: ProdutoOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProdutoScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "nome" | "descricao" | "unidadeMedida" | "categoriaProdutoId" | "receitaId">;

  @TypeGraphQL.Field(_type => ProdutoScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ProdutoScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
