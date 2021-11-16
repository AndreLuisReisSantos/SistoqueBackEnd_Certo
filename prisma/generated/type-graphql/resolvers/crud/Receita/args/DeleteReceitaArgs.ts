import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ReceitaWhereUniqueInput } from "../../../inputs/ReceitaWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteReceitaArgs {
  @TypeGraphQL.Field(_type => ReceitaWhereUniqueInput, {
    nullable: false
  })
  where!: ReceitaWhereUniqueInput;
}
