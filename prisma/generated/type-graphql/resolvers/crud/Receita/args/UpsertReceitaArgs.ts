import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ReceitaCreateInput } from "../../../inputs/ReceitaCreateInput";
import { ReceitaUpdateInput } from "../../../inputs/ReceitaUpdateInput";
import { ReceitaWhereUniqueInput } from "../../../inputs/ReceitaWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertReceitaArgs {
  @TypeGraphQL.Field(_type => ReceitaWhereUniqueInput, {
    nullable: false
  })
  where!: ReceitaWhereUniqueInput;

  @TypeGraphQL.Field(_type => ReceitaCreateInput, {
    nullable: false
  })
  create!: ReceitaCreateInput;

  @TypeGraphQL.Field(_type => ReceitaUpdateInput, {
    nullable: false
  })
  update!: ReceitaUpdateInput;
}
