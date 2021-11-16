import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CategoriaProdutoCreateInput } from "../../../inputs/CategoriaProdutoCreateInput";

@TypeGraphQL.ArgsType()
export class CreateCategoriaProdutoArgs {
  @TypeGraphQL.Field(_type => CategoriaProdutoCreateInput, {
    nullable: false
  })
  data!: CategoriaProdutoCreateInput;
}
