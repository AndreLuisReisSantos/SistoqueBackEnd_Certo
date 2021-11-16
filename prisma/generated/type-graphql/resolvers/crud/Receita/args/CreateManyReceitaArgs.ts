import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ReceitaCreateManyInput } from "../../../inputs/ReceitaCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyReceitaArgs {
  @TypeGraphQL.Field(_type => [ReceitaCreateManyInput], {
    nullable: false
  })
  data!: ReceitaCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
