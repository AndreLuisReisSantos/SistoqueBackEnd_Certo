import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UsuarioCreateManyTipoUsuarioInputEnvelope } from "../inputs/UsuarioCreateManyTipoUsuarioInputEnvelope";
import { UsuarioCreateOrConnectWithoutTipoUsuarioInput } from "../inputs/UsuarioCreateOrConnectWithoutTipoUsuarioInput";
import { UsuarioCreateWithoutTipoUsuarioInput } from "../inputs/UsuarioCreateWithoutTipoUsuarioInput";
import { UsuarioWhereUniqueInput } from "../inputs/UsuarioWhereUniqueInput";

@TypeGraphQL.InputType("UsuarioCreateNestedManyWithoutTipoUsuarioInput", {
  isAbstract: true
})
export class UsuarioCreateNestedManyWithoutTipoUsuarioInput {
  @TypeGraphQL.Field(_type => [UsuarioCreateWithoutTipoUsuarioInput], {
    nullable: true
  })
  create?: UsuarioCreateWithoutTipoUsuarioInput[] | undefined;

  @TypeGraphQL.Field(_type => [UsuarioCreateOrConnectWithoutTipoUsuarioInput], {
    nullable: true
  })
  connectOrCreate?: UsuarioCreateOrConnectWithoutTipoUsuarioInput[] | undefined;

  @TypeGraphQL.Field(_type => UsuarioCreateManyTipoUsuarioInputEnvelope, {
    nullable: true
  })
  createMany?: UsuarioCreateManyTipoUsuarioInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [UsuarioWhereUniqueInput], {
    nullable: true
  })
  connect?: UsuarioWhereUniqueInput[] | undefined;
}
