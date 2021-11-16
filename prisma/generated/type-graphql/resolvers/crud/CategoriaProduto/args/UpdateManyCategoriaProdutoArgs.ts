import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CategoriaProdutoUpdateManyMutationInput } from "../../../inputs/CategoriaProdutoUpdateManyMutationInput";
import { CategoriaProdutoWhereInput } from "../../../inputs/CategoriaProdutoWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyCategoriaProdutoArgs {
  @TypeGraphQL.Field(_type => CategoriaProdutoUpdateManyMutationInput, {
    nullable: false
  })
  data!: CategoriaProdutoUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => CategoriaProdutoWhereInput, {
    nullable: true
  })
  where?: CategoriaProdutoWhereInput | undefined;
}
