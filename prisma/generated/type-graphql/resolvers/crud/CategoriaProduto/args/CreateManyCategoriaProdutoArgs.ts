import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CategoriaProdutoCreateManyInput } from "../../../inputs/CategoriaProdutoCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyCategoriaProdutoArgs {
  @TypeGraphQL.Field(_type => [CategoriaProdutoCreateManyInput], {
    nullable: false
  })
  data!: CategoriaProdutoCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
