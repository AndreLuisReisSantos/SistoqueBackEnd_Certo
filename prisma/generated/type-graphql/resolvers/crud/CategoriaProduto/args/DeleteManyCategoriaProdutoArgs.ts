import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CategoriaProdutoWhereInput } from "../../../inputs/CategoriaProdutoWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyCategoriaProdutoArgs {
  @TypeGraphQL.Field(_type => CategoriaProdutoWhereInput, {
    nullable: true
  })
  where?: CategoriaProdutoWhereInput | undefined;
}
