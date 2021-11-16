import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RepresentanteUpdateInput } from "../../../inputs/RepresentanteUpdateInput";
import { RepresentanteWhereUniqueInput } from "../../../inputs/RepresentanteWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateRepresentanteArgs {
  @TypeGraphQL.Field(_type => RepresentanteUpdateInput, {
    nullable: false
  })
  data!: RepresentanteUpdateInput;

  @TypeGraphQL.Field(_type => RepresentanteWhereUniqueInput, {
    nullable: false
  })
  where!: RepresentanteWhereUniqueInput;
}
