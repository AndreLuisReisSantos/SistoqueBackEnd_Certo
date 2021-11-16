import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PedidoCreateManyUsuarioInputEnvelope } from "../inputs/PedidoCreateManyUsuarioInputEnvelope";
import { PedidoCreateOrConnectWithoutUsuarioInput } from "../inputs/PedidoCreateOrConnectWithoutUsuarioInput";
import { PedidoCreateWithoutUsuarioInput } from "../inputs/PedidoCreateWithoutUsuarioInput";
import { PedidoScalarWhereInput } from "../inputs/PedidoScalarWhereInput";
import { PedidoUpdateManyWithWhereWithoutUsuarioInput } from "../inputs/PedidoUpdateManyWithWhereWithoutUsuarioInput";
import { PedidoUpdateWithWhereUniqueWithoutUsuarioInput } from "../inputs/PedidoUpdateWithWhereUniqueWithoutUsuarioInput";
import { PedidoUpsertWithWhereUniqueWithoutUsuarioInput } from "../inputs/PedidoUpsertWithWhereUniqueWithoutUsuarioInput";
import { PedidoWhereUniqueInput } from "../inputs/PedidoWhereUniqueInput";

@TypeGraphQL.InputType("PedidoUpdateManyWithoutUsuarioInput", {
  isAbstract: true
})
export class PedidoUpdateManyWithoutUsuarioInput {
  @TypeGraphQL.Field(_type => [PedidoCreateWithoutUsuarioInput], {
    nullable: true
  })
  create?: PedidoCreateWithoutUsuarioInput[] | undefined;

  @TypeGraphQL.Field(_type => [PedidoCreateOrConnectWithoutUsuarioInput], {
    nullable: true
  })
  connectOrCreate?: PedidoCreateOrConnectWithoutUsuarioInput[] | undefined;

  @TypeGraphQL.Field(_type => [PedidoUpsertWithWhereUniqueWithoutUsuarioInput], {
    nullable: true
  })
  upsert?: PedidoUpsertWithWhereUniqueWithoutUsuarioInput[] | undefined;

  @TypeGraphQL.Field(_type => PedidoCreateManyUsuarioInputEnvelope, {
    nullable: true
  })
  createMany?: PedidoCreateManyUsuarioInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PedidoWhereUniqueInput], {
    nullable: true
  })
  connect?: PedidoWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PedidoWhereUniqueInput], {
    nullable: true
  })
  set?: PedidoWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PedidoWhereUniqueInput], {
    nullable: true
  })
  disconnect?: PedidoWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PedidoWhereUniqueInput], {
    nullable: true
  })
  delete?: PedidoWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PedidoUpdateWithWhereUniqueWithoutUsuarioInput], {
    nullable: true
  })
  update?: PedidoUpdateWithWhereUniqueWithoutUsuarioInput[] | undefined;

  @TypeGraphQL.Field(_type => [PedidoUpdateManyWithWhereWithoutUsuarioInput], {
    nullable: true
  })
  updateMany?: PedidoUpdateManyWithWhereWithoutUsuarioInput[] | undefined;

  @TypeGraphQL.Field(_type => [PedidoScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PedidoScalarWhereInput[] | undefined;
}
