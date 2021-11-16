import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PedidoCreateManyUsuarioInputEnvelope } from "../inputs/PedidoCreateManyUsuarioInputEnvelope";
import { PedidoCreateOrConnectWithoutUsuarioInput } from "../inputs/PedidoCreateOrConnectWithoutUsuarioInput";
import { PedidoCreateWithoutUsuarioInput } from "../inputs/PedidoCreateWithoutUsuarioInput";
import { PedidoWhereUniqueInput } from "../inputs/PedidoWhereUniqueInput";

@TypeGraphQL.InputType("PedidoCreateNestedManyWithoutUsuarioInput", {
  isAbstract: true
})
export class PedidoCreateNestedManyWithoutUsuarioInput {
  @TypeGraphQL.Field(_type => [PedidoCreateWithoutUsuarioInput], {
    nullable: true
  })
  create?: PedidoCreateWithoutUsuarioInput[] | undefined;

  @TypeGraphQL.Field(_type => [PedidoCreateOrConnectWithoutUsuarioInput], {
    nullable: true
  })
  connectOrCreate?: PedidoCreateOrConnectWithoutUsuarioInput[] | undefined;

  @TypeGraphQL.Field(_type => PedidoCreateManyUsuarioInputEnvelope, {
    nullable: true
  })
  createMany?: PedidoCreateManyUsuarioInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PedidoWhereUniqueInput], {
    nullable: true
  })
  connect?: PedidoWhereUniqueInput[] | undefined;
}
