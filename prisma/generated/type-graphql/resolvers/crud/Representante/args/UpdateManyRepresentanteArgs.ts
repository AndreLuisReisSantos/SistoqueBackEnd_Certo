import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RepresentanteUpdateManyMutationInput } from "../../../inputs/RepresentanteUpdateManyMutationInput";
import { RepresentanteWhereInput } from "../../../inputs/RepresentanteWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyRepresentanteArgs {
  @TypeGraphQL.Field(_type => RepresentanteUpdateManyMutationInput, {
    nullable: false
  })
  data!: RepresentanteUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => RepresentanteWhereInput, {
    nullable: true
  })
  where?: RepresentanteWhereInput | undefined;
}
