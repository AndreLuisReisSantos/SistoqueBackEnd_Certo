import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TipoUsuarioWhereInput } from "../inputs/TipoUsuarioWhereInput";

@TypeGraphQL.InputType("TipoUsuarioRelationFilter", {
  isAbstract: true
})
export class TipoUsuarioRelationFilter {
  @TypeGraphQL.Field(_type => TipoUsuarioWhereInput, {
    nullable: true
  })
  is?: TipoUsuarioWhereInput | undefined;

  @TypeGraphQL.Field(_type => TipoUsuarioWhereInput, {
    nullable: true
  })
  isNot?: TipoUsuarioWhereInput | undefined;
}
