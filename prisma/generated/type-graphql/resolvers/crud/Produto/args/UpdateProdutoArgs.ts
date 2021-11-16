import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProdutoUpdateInput } from "../../../inputs/ProdutoUpdateInput";
import { ProdutoWhereUniqueInput } from "../../../inputs/ProdutoWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateProdutoArgs {
  @TypeGraphQL.Field(_type => ProdutoUpdateInput, {
    nullable: false
  })
  data!: ProdutoUpdateInput;

  @TypeGraphQL.Field(_type => ProdutoWhereUniqueInput, {
    nullable: false
  })
  where!: ProdutoWhereUniqueInput;
}
