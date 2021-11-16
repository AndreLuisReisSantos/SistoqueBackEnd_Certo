import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RepresentanteCreateInput } from "../../../inputs/RepresentanteCreateInput";

@TypeGraphQL.ArgsType()
export class CreateRepresentanteArgs {
  @TypeGraphQL.Field(_type => RepresentanteCreateInput, {
    nullable: false
  })
  data!: RepresentanteCreateInput;
}
