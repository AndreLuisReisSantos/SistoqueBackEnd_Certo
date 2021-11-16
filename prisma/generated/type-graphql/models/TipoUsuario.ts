import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Usuario } from "../models/Usuario";
import { TipoUsuarioCount } from "../resolvers/outputs/TipoUsuarioCount";

@TypeGraphQL.ObjectType("TipoUsuario", {
  isAbstract: true
})
export class TipoUsuario {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  nome!: string;

  Usuario?: Usuario[];

  @TypeGraphQL.Field(_type => TipoUsuarioCount, {
    nullable: true
  })
  _count?: TipoUsuarioCount | null;
}
