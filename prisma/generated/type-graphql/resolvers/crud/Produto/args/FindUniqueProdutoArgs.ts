import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProdutoWhereUniqueInput } from "../../../inputs/ProdutoWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueProdutoArgs {
  @TypeGraphQL.Field(_type => ProdutoWhereUniqueInput, {
    nullable: false
  })
  where!: ProdutoWhereUniqueInput;
}
