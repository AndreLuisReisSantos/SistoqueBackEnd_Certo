import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FornecedorUpdateInput } from "../../../inputs/FornecedorUpdateInput";
import { FornecedorWhereUniqueInput } from "../../../inputs/FornecedorWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateFornecedorArgs {
  @TypeGraphQL.Field(_type => FornecedorUpdateInput, {
    nullable: false
  })
  data!: FornecedorUpdateInput;

  @TypeGraphQL.Field(_type => FornecedorWhereUniqueInput, {
    nullable: false
  })
  where!: FornecedorWhereUniqueInput;
}
