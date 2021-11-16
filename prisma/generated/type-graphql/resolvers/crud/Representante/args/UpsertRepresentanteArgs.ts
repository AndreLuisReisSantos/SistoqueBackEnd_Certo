import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RepresentanteCreateInput } from "../../../inputs/RepresentanteCreateInput";
import { RepresentanteUpdateInput } from "../../../inputs/RepresentanteUpdateInput";
import { RepresentanteWhereUniqueInput } from "../../../inputs/RepresentanteWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertRepresentanteArgs {
  @TypeGraphQL.Field(_type => RepresentanteWhereUniqueInput, {
    nullable: false
  })
  where!: RepresentanteWhereUniqueInput;

  @TypeGraphQL.Field(_type => RepresentanteCreateInput, {
    nullable: false
  })
  create!: RepresentanteCreateInput;

  @TypeGraphQL.Field(_type => RepresentanteUpdateInput, {
    nullable: false
  })
  update!: RepresentanteUpdateInput;
}
