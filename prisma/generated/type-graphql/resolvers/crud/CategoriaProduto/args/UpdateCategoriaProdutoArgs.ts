import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CategoriaProdutoUpdateInput } from "../../../inputs/CategoriaProdutoUpdateInput";
import { CategoriaProdutoWhereUniqueInput } from "../../../inputs/CategoriaProdutoWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateCategoriaProdutoArgs {
  @TypeGraphQL.Field(_type => CategoriaProdutoUpdateInput, {
    nullable: false
  })
  data!: CategoriaProdutoUpdateInput;

  @TypeGraphQL.Field(_type => CategoriaProdutoWhereUniqueInput, {
    nullable: false
  })
  where!: CategoriaProdutoWhereUniqueInput;
}
