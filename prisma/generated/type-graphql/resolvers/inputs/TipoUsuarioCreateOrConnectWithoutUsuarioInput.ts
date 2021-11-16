import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TipoUsuarioCreateWithoutUsuarioInput } from "../inputs/TipoUsuarioCreateWithoutUsuarioInput";
import { TipoUsuarioWhereUniqueInput } from "../inputs/TipoUsuarioWhereUniqueInput";

@TypeGraphQL.InputType("TipoUsuarioCreateOrConnectWithoutUsuarioInput", {
  isAbstract: true
})
export class TipoUsuarioCreateOrConnectWithoutUsuarioInput {
  @TypeGraphQL.Field(_type => TipoUsuarioWhereUniqueInput, {
    nullable: false
  })
  where!: TipoUsuarioWhereUniqueInput;

  @TypeGraphQL.Field(_type => TipoUsuarioCreateWithoutUsuarioInput, {
    nullable: false
  })
  create!: TipoUsuarioCreateWithoutUsuarioInput;
}
