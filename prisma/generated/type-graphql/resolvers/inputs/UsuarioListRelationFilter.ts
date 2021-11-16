import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UsuarioWhereInput } from "../inputs/UsuarioWhereInput";

@TypeGraphQL.InputType("UsuarioListRelationFilter", {
  isAbstract: true
})
export class UsuarioListRelationFilter {
  @TypeGraphQL.Field(_type => UsuarioWhereInput, {
    nullable: true
  })
  every?: UsuarioWhereInput | undefined;

  @TypeGraphQL.Field(_type => UsuarioWhereInput, {
    nullable: true
  })
  some?: UsuarioWhereInput | undefined;

  @TypeGraphQL.Field(_type => UsuarioWhereInput, {
    nullable: true
  })
  none?: UsuarioWhereInput | undefined;
}
