import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FornecedorCreateInput } from "../../../inputs/FornecedorCreateInput";
import { FornecedorUpdateInput } from "../../../inputs/FornecedorUpdateInput";
import { FornecedorWhereUniqueInput } from "../../../inputs/FornecedorWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertFornecedorArgs {
  @TypeGraphQL.Field(_type => FornecedorWhereUniqueInput, {
    nullable: false
  })
  where!: FornecedorWhereUniqueInput;

  @TypeGraphQL.Field(_type => FornecedorCreateInput, {
    nullable: false
  })
  create!: FornecedorCreateInput;

  @TypeGraphQL.Field(_type => FornecedorUpdateInput, {
    nullable: false
  })
  update!: FornecedorUpdateInput;
}
