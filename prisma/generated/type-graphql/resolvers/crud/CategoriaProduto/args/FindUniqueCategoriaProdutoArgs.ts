import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CategoriaProdutoWhereUniqueInput } from "../../../inputs/CategoriaProdutoWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueCategoriaProdutoArgs {
  @TypeGraphQL.Field(_type => CategoriaProdutoWhereUniqueInput, {
    nullable: false
  })
  where!: CategoriaProdutoWhereUniqueInput;
}
