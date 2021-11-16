import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ReceitaCreateInput } from "../../../inputs/ReceitaCreateInput";

@TypeGraphQL.ArgsType()
export class CreateReceitaArgs {
  @TypeGraphQL.Field(_type => ReceitaCreateInput, {
    nullable: false
  })
  data!: ReceitaCreateInput;
}
