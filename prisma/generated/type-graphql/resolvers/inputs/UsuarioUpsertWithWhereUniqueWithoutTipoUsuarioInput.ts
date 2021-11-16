import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UsuarioCreateWithoutTipoUsuarioInput } from "../inputs/UsuarioCreateWithoutTipoUsuarioInput";
import { UsuarioUpdateWithoutTipoUsuarioInput } from "../inputs/UsuarioUpdateWithoutTipoUsuarioInput";
import { UsuarioWhereUniqueInput } from "../inputs/UsuarioWhereUniqueInput";

@TypeGraphQL.InputType("UsuarioUpsertWithWhereUniqueWithoutTipoUsuarioInput", {
  isAbstract: true
})
export class UsuarioUpsertWithWhereUniqueWithoutTipoUsuarioInput {
  @TypeGraphQL.Field(_type => UsuarioWhereUniqueInput, {
    nullable: false
  })
  where!: UsuarioWhereUniqueInput;

  @TypeGraphQL.Field(_type => UsuarioUpdateWithoutTipoUsuarioInput, {
    nullable: false
  })
  update!: UsuarioUpdateWithoutTipoUsuarioInput;

  @TypeGraphQL.Field(_type => UsuarioCreateWithoutTipoUsuarioInput, {
    nullable: false
  })
  create!: UsuarioCreateWithoutTipoUsuarioInput;
}
