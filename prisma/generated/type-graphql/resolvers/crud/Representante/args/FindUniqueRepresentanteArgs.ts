import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RepresentanteWhereUniqueInput } from "../../../inputs/RepresentanteWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueRepresentanteArgs {
  @TypeGraphQL.Field(_type => RepresentanteWhereUniqueInput, {
    nullable: false
  })
  where!: RepresentanteWhereUniqueInput;
}
