import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FornecedorCreateManyRepresentanteInputEnvelope } from "../inputs/FornecedorCreateManyRepresentanteInputEnvelope";
import { FornecedorCreateOrConnectWithoutRepresentanteInput } from "../inputs/FornecedorCreateOrConnectWithoutRepresentanteInput";
import { FornecedorCreateWithoutRepresentanteInput } from "../inputs/FornecedorCreateWithoutRepresentanteInput";
import { FornecedorScalarWhereInput } from "../inputs/FornecedorScalarWhereInput";
import { FornecedorUpdateManyWithWhereWithoutRepresentanteInput } from "../inputs/FornecedorUpdateManyWithWhereWithoutRepresentanteInput";
import { FornecedorUpdateWithWhereUniqueWithoutRepresentanteInput } from "../inputs/FornecedorUpdateWithWhereUniqueWithoutRepresentanteInput";
import { FornecedorUpsertWithWhereUniqueWithoutRepresentanteInput } from "../inputs/FornecedorUpsertWithWhereUniqueWithoutRepresentanteInput";
import { FornecedorWhereUniqueInput } from "../inputs/FornecedorWhereUniqueInput";

@TypeGraphQL.InputType("FornecedorUpdateManyWithoutRepresentanteInput", {
  isAbstract: true
})
export class FornecedorUpdateManyWithoutRepresentanteInput {
  @TypeGraphQL.Field(_type => [FornecedorCreateWithoutRepresentanteInput], {
    nullable: true
  })
  create?: FornecedorCreateWithoutRepresentanteInput[] | undefined;

  @TypeGraphQL.Field(_type => [FornecedorCreateOrConnectWithoutRepresentanteInput], {
    nullable: true
  })
  connectOrCreate?: FornecedorCreateOrConnectWithoutRepresentanteInput[] | undefined;

  @TypeGraphQL.Field(_type => [FornecedorUpsertWithWhereUniqueWithoutRepresentanteInput], {
    nullable: true
  })
  upsert?: FornecedorUpsertWithWhereUniqueWithoutRepresentanteInput[] | undefined;

  @TypeGraphQL.Field(_type => FornecedorCreateManyRepresentanteInputEnvelope, {
    nullable: true
  })
  createMany?: FornecedorCreateManyRepresentanteInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [FornecedorWhereUniqueInput], {
    nullable: true
  })
  connect?: FornecedorWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [FornecedorWhereUniqueInput], {
    nullable: true
  })
  set?: FornecedorWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [FornecedorWhereUniqueInput], {
    nullable: true
  })
  disconnect?: FornecedorWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [FornecedorWhereUniqueInput], {
    nullable: true
  })
  delete?: FornecedorWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [FornecedorUpdateWithWhereUniqueWithoutRepresentanteInput], {
    nullable: true
  })
  update?: FornecedorUpdateWithWhereUniqueWithoutRepresentanteInput[] | undefined;

  @TypeGraphQL.Field(_type => [FornecedorUpdateManyWithWhereWithoutRepresentanteInput], {
    nullable: true
  })
  updateMany?: FornecedorUpdateManyWithWhereWithoutRepresentanteInput[] | undefined;

  @TypeGraphQL.Field(_type => [FornecedorScalarWhereInput], {
    nullable: true
  })
  deleteMany?: FornecedorScalarWhereInput[] | undefined;
}
