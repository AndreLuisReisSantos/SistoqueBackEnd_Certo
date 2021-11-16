import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProdutoCreateManyInput } from "../../../inputs/ProdutoCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyProdutoArgs {
  @TypeGraphQL.Field(_type => [ProdutoCreateManyInput], {
    nullable: false
  })
  data!: ProdutoCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
