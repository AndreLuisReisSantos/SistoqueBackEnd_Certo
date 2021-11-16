import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UsuarioListRelationFilter } from "../inputs/UsuarioListRelationFilter";

@TypeGraphQL.InputType("TipoUsuarioWhereInput", {
  isAbstract: true
})
export class TipoUsuarioWhereInput {
  @TypeGraphQL.Field(_type => [TipoUsuarioWhereInput], {
    nullable: true
  })
  AND?: TipoUsuarioWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TipoUsuarioWhereInput], {
    nullable: true
  })
  OR?: TipoUsuarioWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TipoUsuarioWhereInput], {
    nullable: true
  })
  NOT?: TipoUsuarioWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  nome?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => UsuarioListRelationFilter, {
    nullable: true
  })
  Usuario?: UsuarioListRelationFilter | undefined;
}
