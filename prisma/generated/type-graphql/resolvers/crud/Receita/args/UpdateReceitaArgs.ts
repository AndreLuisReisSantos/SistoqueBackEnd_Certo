import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ReceitaUpdateInput } from "../../../inputs/ReceitaUpdateInput";
import { ReceitaWhereUniqueInput } from "../../../inputs/ReceitaWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateReceitaArgs {
  @TypeGraphQL.Field(_type => ReceitaUpdateInput, {
    nullable: false
  })
  data!: ReceitaUpdateInput;

  @TypeGraphQL.Field(_type => ReceitaWhereUniqueInput, {
    nullable: false
  })
  where!: ReceitaWhereUniqueInput;
}
