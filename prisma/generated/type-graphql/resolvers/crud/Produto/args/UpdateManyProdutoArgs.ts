import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProdutoUpdateManyMutationInput } from "../../../inputs/ProdutoUpdateManyMutationInput";
import { ProdutoWhereInput } from "../../../inputs/ProdutoWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyProdutoArgs {
  @TypeGraphQL.Field(_type => ProdutoUpdateManyMutationInput, {
    nullable: false
  })
  data!: ProdutoUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ProdutoWhereInput, {
    nullable: true
  })
  where?: ProdutoWhereInput | undefined;
}
