import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TipoUsuarioCreateWithoutUsuarioInput } from "../inputs/TipoUsuarioCreateWithoutUsuarioInput";
import { TipoUsuarioUpdateWithoutUsuarioInput } from "../inputs/TipoUsuarioUpdateWithoutUsuarioInput";

@TypeGraphQL.InputType("TipoUsuarioUpsertWithoutUsuarioInput", {
  isAbstract: true
})
export class TipoUsuarioUpsertWithoutUsuarioInput {
  @TypeGraphQL.Field(_type => TipoUsuarioUpdateWithoutUsuarioInput, {
    nullable: false
  })
  update!: TipoUsuarioUpdateWithoutUsuarioInput;

  @TypeGraphQL.Field(_type => TipoUsuarioCreateWithoutUsuarioInput, {
    nullable: false
  })
  create!: TipoUsuarioCreateWithoutUsuarioInput;
}
