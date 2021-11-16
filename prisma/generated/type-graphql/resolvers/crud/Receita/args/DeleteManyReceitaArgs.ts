import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ReceitaWhereInput } from "../../../inputs/ReceitaWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyReceitaArgs {
  @TypeGraphQL.Field(_type => ReceitaWhereInput, {
    nullable: true
  })
  where?: ReceitaWhereInput | undefined;
}
