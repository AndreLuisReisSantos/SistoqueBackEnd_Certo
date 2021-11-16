import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UsuarioUpdateWithoutTipoUsuarioInput } from "../inputs/UsuarioUpdateWithoutTipoUsuarioInput";
import { UsuarioWhereUniqueInput } from "../inputs/UsuarioWhereUniqueInput";

@TypeGraphQL.InputType("UsuarioUpdateWithWhereUniqueWithoutTipoUsuarioInput", {
  isAbstract: true
})
export class UsuarioUpdateWithWhereUniqueWithoutTipoUsuarioInput {
  @TypeGraphQL.Field(_type => UsuarioWhereUniqueInput, {
    nullable: false
  })
  where!: UsuarioWhereUniqueInput;

  @TypeGraphQL.Field(_type => UsuarioUpdateWithoutTipoUsuarioInput, {
    nullable: false
  })
  data!: UsuarioUpdateWithoutTipoUsuarioInput;
}
