import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProdutoCreateInput } from "../../../inputs/ProdutoCreateInput";
import { ProdutoUpdateInput } from "../../../inputs/ProdutoUpdateInput";
import { ProdutoWhereUniqueInput } from "../../../inputs/ProdutoWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertProdutoArgs {
  @TypeGraphQL.Field(_type => ProdutoWhereUniqueInput, {
    nullable: false
  })
  where!: ProdutoWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProdutoCreateInput, {
    nullable: false
  })
  create!: ProdutoCreateInput;

  @TypeGraphQL.Field(_type => ProdutoUpdateInput, {
    nullable: false
  })
  update!: ProdutoUpdateInput;
}
