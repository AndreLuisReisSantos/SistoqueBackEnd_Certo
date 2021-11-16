import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CategoriaProdutoOrderByWithAggregationInput } from "../../../inputs/CategoriaProdutoOrderByWithAggregationInput";
import { CategoriaProdutoScalarWhereWithAggregatesInput } from "../../../inputs/CategoriaProdutoScalarWhereWithAggregatesInput";
import { CategoriaProdutoWhereInput } from "../../../inputs/CategoriaProdutoWhereInput";
import { CategoriaProdutoScalarFieldEnum } from "../../../../enums/CategoriaProdutoScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByCategoriaProdutoArgs {
  @TypeGraphQL.Field(_type => CategoriaProdutoWhereInput, {
    nullable: true
  })
  where?: CategoriaProdutoWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CategoriaProdutoOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: CategoriaProdutoOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [CategoriaProdutoScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "nome">;

  @TypeGraphQL.Field(_type => CategoriaProdutoScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: CategoriaProdutoScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
