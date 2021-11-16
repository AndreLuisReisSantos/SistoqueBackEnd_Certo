import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EstoqueCreateInput } from "../../../inputs/EstoqueCreateInput";

@TypeGraphQL.ArgsType()
export class CreateEstoqueArgs {
  @TypeGraphQL.Field(_type => EstoqueCreateInput, {
    nullable: false
  })
  data!: EstoqueCreateInput;
}
