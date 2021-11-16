import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EstoqueCreateManyInput } from "../../../inputs/EstoqueCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyEstoqueArgs {
  @TypeGraphQL.Field(_type => [EstoqueCreateManyInput], {
    nullable: false
  })
  data!: EstoqueCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
