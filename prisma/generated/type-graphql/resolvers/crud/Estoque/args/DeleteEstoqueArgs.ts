import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EstoqueWhereUniqueInput } from "../../../inputs/EstoqueWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteEstoqueArgs {
  @TypeGraphQL.Field(_type => EstoqueWhereUniqueInput, {
    nullable: false
  })
  where!: EstoqueWhereUniqueInput;
}
