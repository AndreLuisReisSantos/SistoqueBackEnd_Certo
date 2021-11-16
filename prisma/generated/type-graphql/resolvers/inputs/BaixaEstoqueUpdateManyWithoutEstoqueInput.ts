import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BaixaEstoqueCreateManyEstoqueInputEnvelope } from "../inputs/BaixaEstoqueCreateManyEstoqueInputEnvelope";
import { BaixaEstoqueCreateOrConnectWithoutEstoqueInput } from "../inputs/BaixaEstoqueCreateOrConnectWithoutEstoqueInput";
import { BaixaEstoqueCreateWithoutEstoqueInput } from "../inputs/BaixaEstoqueCreateWithoutEstoqueInput";
import { BaixaEstoqueScalarWhereInput } from "../inputs/BaixaEstoqueScalarWhereInput";
import { BaixaEstoqueUpdateManyWithWhereWithoutEstoqueInput } from "../inputs/BaixaEstoqueUpdateManyWithWhereWithoutEstoqueInput";
import { BaixaEstoqueUpdateWithWhereUniqueWithoutEstoqueInput } from "../inputs/BaixaEstoqueUpdateWithWhereUniqueWithoutEstoqueInput";
import { BaixaEstoqueUpsertWithWhereUniqueWithoutEstoqueInput } from "../inputs/BaixaEstoqueUpsertWithWhereUniqueWithoutEstoqueInput";
import { BaixaEstoqueWhereUniqueInput } from "../inputs/BaixaEstoqueWhereUniqueInput";

@TypeGraphQL.InputType("BaixaEstoqueUpdateManyWithoutEstoqueInput", {
  isAbstract: true
})
export class BaixaEstoqueUpdateManyWithoutEstoqueInput {
  @TypeGraphQL.Field(_type => [BaixaEstoqueCreateWithoutEstoqueInput], {
    nullable: true
  })
  create?: BaixaEstoqueCreateWithoutEstoqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [BaixaEstoqueCreateOrConnectWithoutEstoqueInput], {
    nullable: true
  })
  connectOrCreate?: BaixaEstoqueCreateOrConnectWithoutEstoqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [BaixaEstoqueUpsertWithWhereUniqueWithoutEstoqueInput], {
    nullable: true
  })
  upsert?: BaixaEstoqueUpsertWithWhereUniqueWithoutEstoqueInput[] | undefined;

  @TypeGraphQL.Field(_type => BaixaEstoqueCreateManyEstoqueInputEnvelope, {
    nullable: true
  })
  createMany?: BaixaEstoqueCreateManyEstoqueInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [BaixaEstoqueUpdateWithWhereUniqueWithoutEstoqueInput], {
    nullable: true
  })
  update?: BaixaEstoqueUpdateWithWhereUniqueWithoutEstoqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [BaixaEstoqueUpdateManyWithWhereWithoutEstoqueInput], {
    nullable: true
  })
  updateMany?: BaixaEstoqueUpdateManyWithWhereWithoutEstoqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [BaixaEstoqueScalarWhereInput], {
    nullable: true
  })
  deleteMany?: BaixaEstoqueScalarWhereInput[] | undefined;
}
