import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FornecedorWhereInput } from "../../../inputs/FornecedorWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyFornecedorArgs {
  @TypeGraphQL.Field(_type => FornecedorWhereInput, {
    nullable: true
  })
  where?: FornecedorWhereInput | undefined;
}
