import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProdutoWhereInput } from "../../../inputs/ProdutoWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyProdutoArgs {
  @TypeGraphQL.Field(_type => ProdutoWhereInput, {
    nullable: true
  })
  where?: ProdutoWhereInput | undefined;
}
