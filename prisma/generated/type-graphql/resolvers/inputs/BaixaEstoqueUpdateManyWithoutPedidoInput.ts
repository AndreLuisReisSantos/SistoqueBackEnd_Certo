import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BaixaEstoqueCreateManyPedidoInputEnvelope } from "../inputs/BaixaEstoqueCreateManyPedidoInputEnvelope";
import { BaixaEstoqueCreateOrConnectWithoutPedidoInput } from "../inputs/BaixaEstoqueCreateOrConnectWithoutPedidoInput";
import { BaixaEstoqueCreateWithoutPedidoInput } from "../inputs/BaixaEstoqueCreateWithoutPedidoInput";
import { BaixaEstoqueScalarWhereInput } from "../inputs/BaixaEstoqueScalarWhereInput";
import { BaixaEstoqueUpdateManyWithWhereWithoutPedidoInput } from "../inputs/BaixaEstoqueUpdateManyWithWhereWithoutPedidoInput";
import { BaixaEstoqueUpdateWithWhereUniqueWithoutPedidoInput } from "../inputs/BaixaEstoqueUpdateWithWhereUniqueWithoutPedidoInput";
import { BaixaEstoqueUpsertWithWhereUniqueWithoutPedidoInput } from "../inputs/BaixaEstoqueUpsertWithWhereUniqueWithoutPedidoInput";
import { BaixaEstoqueWhereUniqueInput } from "../inputs/BaixaEstoqueWhereUniqueInput";

@TypeGraphQL.InputType("BaixaEstoqueUpdateManyWithoutPedidoInput", {
  isAbstract: true
})
export class BaixaEstoqueUpdateManyWithoutPedidoInput {
  @TypeGraphQL.Field(_type => [BaixaEstoqueCreateWithoutPedidoInput], {
    nullable: true
  })
  create?: BaixaEstoqueCreateWithoutPedidoInput[] | undefined;

  @TypeGraphQL.Field(_type => [BaixaEstoqueCreateOrConnectWithoutPedidoInput], {
    nullable: true
  })
  connectOrCreate?: BaixaEstoqueCreateOrConnectWithoutPedidoInput[] | undefined;

  @TypeGraphQL.Field(_type => [BaixaEstoqueUpsertWithWhereUniqueWithoutPedidoInput], {
    nullable: true
  })
  upsert?: BaixaEstoqueUpsertWithWhereUniqueWithoutPedidoInput[] | undefined;

  @TypeGraphQL.Field(_type => BaixaEstoqueCreateManyPedidoInputEnvelope, {
    nullable: true
  })
  createMany?: BaixaEstoqueCreateManyPedidoInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [BaixaEstoqueWhereUniqueInput], {
    nullable: true
  })
  connect?: BaixaEstoqueWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [BaixaEstoqueWhereUniqueInput], {
    nullable: true
  })
  set?: BaixaEstoqueWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [BaixaEstoqueWhereUniqueInput], {
    nullable: true
  })
  disconnect?: BaixaEstoqueWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [BaixaEstoqueWhereUniqueInput], {
    nullable: true
  })
  delete?: BaixaEstoqueWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [BaixaEstoqueUpdateWithWhereUniqueWithoutPedidoInput], {
    nullable: true
  })
  update?: BaixaEstoqueUpdateWithWhereUniqueWithoutPedidoInput[] | undefined;

  @TypeGraphQL.Field(_type => [BaixaEstoqueUpdateManyWithWhereWithoutPedidoInput], {
    nullable: true
  })
  updateMany?: BaixaEstoqueUpdateManyWithWhereWithoutPedidoInput[] | undefined;

  @TypeGraphQL.Field(_type => [BaixaEstoqueScalarWhereInput], {
    nullable: true
  })
  deleteMany?: BaixaEstoqueScalarWhereInput[] | undefined;
}
