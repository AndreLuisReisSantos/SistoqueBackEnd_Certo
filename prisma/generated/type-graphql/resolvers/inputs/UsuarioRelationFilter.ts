import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UsuarioWhereInput } from "../inputs/UsuarioWhereInput";

@TypeGraphQL.InputType("UsuarioRelationFilter", {
  isAbstract: true
})
export class UsuarioRelationFilter {
  @TypeGraphQL.Field(_type => UsuarioWhereInput, {
    nullable: true
  })
  is?: UsuarioWhereInput | undefined;

  @TypeGraphQL.Field(_type => UsuarioWhereInput, {
    nullable: true
  })
  isNot?: UsuarioWhereInput | undefined;
}
