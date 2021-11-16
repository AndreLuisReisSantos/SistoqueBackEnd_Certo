import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProdutoCreateInput } from "../../../inputs/ProdutoCreateInput";

@TypeGraphQL.ArgsType()
export class CreateProdutoArgs {
  @TypeGraphQL.Field(_type => ProdutoCreateInput, {
    nullable: false
  })
  data!: ProdutoCreateInput;
}
