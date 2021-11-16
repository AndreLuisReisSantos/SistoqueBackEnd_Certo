import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RepresentanteWhereInput } from "../../../inputs/RepresentanteWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyRepresentanteArgs {
  @TypeGraphQL.Field(_type => RepresentanteWhereInput, {
    nullable: true
  })
  where?: RepresentanteWhereInput | undefined;
}
