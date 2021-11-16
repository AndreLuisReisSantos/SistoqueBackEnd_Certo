import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UsuarioCreateWithoutTipoUsuarioInput } from "../inputs/UsuarioCreateWithoutTipoUsuarioInput";
import { UsuarioWhereUniqueInput } from "../inputs/UsuarioWhereUniqueInput";

@TypeGraphQL.InputType("UsuarioCreateOrConnectWithoutTipoUsuarioInput", {
  isAbstract: true
})
export class UsuarioCreateOrConnectWithoutTipoUsuarioInput {
  @TypeGraphQL.Field(_type => UsuarioWhereUniqueInput, {
    nullable: false
  })
  where!: UsuarioWhereUniqueInput;

  @TypeGraphQL.Field(_type => UsuarioCreateWithoutTipoUsuarioInput, {
    nullable: false
  })
  create!: UsuarioCreateWithoutTipoUsuarioInput;
}
