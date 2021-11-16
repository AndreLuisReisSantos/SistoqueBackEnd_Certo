import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FornecedorCreateInput } from "../../../inputs/FornecedorCreateInput";

@TypeGraphQL.ArgsType()
export class CreateFornecedorArgs {
  @TypeGraphQL.Field(_type => FornecedorCreateInput, {
    nullable: false
  })
  data!: FornecedorCreateInput;
}
