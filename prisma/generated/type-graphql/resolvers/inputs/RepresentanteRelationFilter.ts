import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RepresentanteWhereInput } from "../inputs/RepresentanteWhereInput";

@TypeGraphQL.InputType("RepresentanteRelationFilter", {
  isAbstract: true
})
export class RepresentanteRelationFilter {
  @TypeGraphQL.Field(_type => RepresentanteWhereInput, {
    nullable: true
  })
  is?: RepresentanteWhereInput | undefined;

  @TypeGraphQL.Field(_type => RepresentanteWhereInput, {
    nullable: true
  })
  isNot?: RepresentanteWhereInput | undefined;
}
