import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FornecedorUpdateManyMutationInput } from "../../../inputs/FornecedorUpdateManyMutationInput";
import { FornecedorWhereInput } from "../../../inputs/FornecedorWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyFornecedorArgs {
  @TypeGraphQL.Field(_type => FornecedorUpdateManyMutationInput, {
    nullable: false
  })
  data!: FornecedorUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => FornecedorWhereInput, {
    nullable: true
  })
  where?: FornecedorWhereInput | undefined;
}
