import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FornecedorWhereUniqueInput } from "../../../inputs/FornecedorWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueFornecedorArgs {
  @TypeGraphQL.Field(_type => FornecedorWhereUniqueInput, {
    nullable: false
  })
  where!: FornecedorWhereUniqueInput;
}
