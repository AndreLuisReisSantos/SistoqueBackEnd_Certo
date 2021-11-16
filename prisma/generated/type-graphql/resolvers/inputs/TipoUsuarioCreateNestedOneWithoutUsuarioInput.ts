import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TipoUsuarioCreateOrConnectWithoutUsuarioInput } from "../inputs/TipoUsuarioCreateOrConnectWithoutUsuarioInput";
import { TipoUsuarioCreateWithoutUsuarioInput } from "../inputs/TipoUsuarioCreateWithoutUsuarioInput";
import { TipoUsuarioWhereUniqueInput } from "../inputs/TipoUsuarioWhereUniqueInput";

@TypeGraphQL.InputType("TipoUsuarioCreateNestedOneWithoutUsuarioInput", {
  isAbstract: true
})
export class TipoUsuarioCreateNestedOneWithoutUsuarioInput {
  @TypeGraphQL.Field(_type => TipoUsuarioCreateWithoutUsuarioInput, {
    nullable: true
  })
  create?: TipoUsuarioCreateWithoutUsuarioInput | undefined;

  @TypeGraphQL.Field(_type => TipoUsuarioCreateOrConnectWithoutUsuarioInput, {
    nullable: true
  })
  connectOrCreate?: TipoUsuarioCreateOrConnectWithoutUsuarioInput | undefined;

  @TypeGraphQL.Field(_type => TipoUsuarioWhereUniqueInput, {
    nullable: true
  })
  connect?: TipoUsuarioWhereUniqueInput | undefined;
}
