import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CategoriaProdutoCreateInput } from "../../../inputs/CategoriaProdutoCreateInput";
import { CategoriaProdutoUpdateInput } from "../../../inputs/CategoriaProdutoUpdateInput";
import { CategoriaProdutoWhereUniqueInput } from "../../../inputs/CategoriaProdutoWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertCategoriaProdutoArgs {
  @TypeGraphQL.Field(_type => CategoriaProdutoWhereUniqueInput, {
    nullable: false
  })
  where!: CategoriaProdutoWhereUniqueInput;

  @TypeGraphQL.Field(_type => CategoriaProdutoCreateInput, {
    nullable: false
  })
  create!: CategoriaProdutoCreateInput;

  @TypeGraphQL.Field(_type => CategoriaProdutoUpdateInput, {
    nullable: false
  })
  update!: CategoriaProdutoUpdateInput;
}
