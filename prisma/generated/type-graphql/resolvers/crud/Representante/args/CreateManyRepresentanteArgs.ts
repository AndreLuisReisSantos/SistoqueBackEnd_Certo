import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RepresentanteCreateManyInput } from "../../../inputs/RepresentanteCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyRepresentanteArgs {
  @TypeGraphQL.Field(_type => [RepresentanteCreateManyInput], {
    nullable: false
  })
  data!: RepresentanteCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
