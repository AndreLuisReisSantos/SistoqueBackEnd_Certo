import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UsuarioCreateManyTipoUsuarioInputEnvelope } from "../inputs/UsuarioCreateManyTipoUsuarioInputEnvelope";
import { UsuarioCreateOrConnectWithoutTipoUsuarioInput } from "../inputs/UsuarioCreateOrConnectWithoutTipoUsuarioInput";
import { UsuarioCreateWithoutTipoUsuarioInput } from "../inputs/UsuarioCreateWithoutTipoUsuarioInput";
import { UsuarioScalarWhereInput } from "../inputs/UsuarioScalarWhereInput";
import { UsuarioUpdateManyWithWhereWithoutTipoUsuarioInput } from "../inputs/UsuarioUpdateManyWithWhereWithoutTipoUsuarioInput";
import { UsuarioUpdateWithWhereUniqueWithoutTipoUsuarioInput } from "../inputs/UsuarioUpdateWithWhereUniqueWithoutTipoUsuarioInput";
import { UsuarioUpsertWithWhereUniqueWithoutTipoUsuarioInput } from "../inputs/UsuarioUpsertWithWhereUniqueWithoutTipoUsuarioInput";
import { UsuarioWhereUniqueInput } from "../inputs/UsuarioWhereUniqueInput";

@TypeGraphQL.InputType("UsuarioUpdateManyWithoutTipoUsuarioInput", {
  isAbstract: true
})
export class UsuarioUpdateManyWithoutTipoUsuarioInput {
  @TypeGraphQL.Field(_type => [UsuarioCreateWithoutTipoUsuarioInput], {
    nullable: true
  })
  create?: UsuarioCreateWithoutTipoUsuarioInput[] | undefined;

  @TypeGraphQL.Field(_type => [UsuarioCreateOrConnectWithoutTipoUsuarioInput], {
    nullable: true
  })
  connectOrCreate?: UsuarioCreateOrConnectWithoutTipoUsuarioInput[] | undefined;

  @TypeGraphQL.Field(_type => [UsuarioUpsertWithWhereUniqueWithoutTipoUsuarioInput], {
    nullable: true
  })
  upsert?: UsuarioUpsertWithWhereUniqueWithoutTipoUsuarioInput[] | undefined;

  @TypeGraphQL.Field(_type => UsuarioCreateManyTipoUsuarioInputEnvelope, {
    nullable: true
  })
  createMany?: UsuarioCreateManyTipoUsuarioInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [UsuarioWhereUniqueInput], {
    nullable: true
  })
  connect?: UsuarioWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UsuarioWhereUniqueInput], {
    nullable: true
  })
  set?: UsuarioWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UsuarioWhereUniqueInput], {
    nullable: true
  })
  disconnect?: UsuarioWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UsuarioWhereUniqueInput], {
    nullable: true
  })
  delete?: UsuarioWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UsuarioUpdateWithWhereUniqueWithoutTipoUsuarioInput], {
    nullable: true
  })
  update?: UsuarioUpdateWithWhereUniqueWithoutTipoUsuarioInput[] | undefined;

  @TypeGraphQL.Field(_type => [UsuarioUpdateManyWithWhereWithoutTipoUsuarioInput], {
    nullable: true
  })
  updateMany?: UsuarioUpdateManyWithWhereWithoutTipoUsuarioInput[] | undefined;

  @TypeGraphQL.Field(_type => [UsuarioScalarWhereInput], {
    nullable: true
  })
  deleteMany?: UsuarioScalarWhereInput[] | undefined;
}
