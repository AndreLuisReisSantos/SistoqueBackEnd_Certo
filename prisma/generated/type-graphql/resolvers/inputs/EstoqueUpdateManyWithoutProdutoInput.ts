import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EstoqueCreateManyProdutoInputEnvelope } from "../inputs/EstoqueCreateManyProdutoInputEnvelope";
import { EstoqueCreateOrConnectWithoutProdutoInput } from "../inputs/EstoqueCreateOrConnectWithoutProdutoInput";
import { EstoqueCreateWithoutProdutoInput } from "../inputs/EstoqueCreateWithoutProdutoInput";
import { EstoqueScalarWhereInput } from "../inputs/EstoqueScalarWhereInput";
import { EstoqueUpdateManyWithWhereWithoutProdutoInput } from "../inputs/EstoqueUpdateManyWithWhereWithoutProdutoInput";
import { EstoqueUpdateWithWhereUniqueWithoutProdutoInput } from "../inputs/EstoqueUpdateWithWhereUniqueWithoutProdutoInput";
import { EstoqueUpsertWithWhereUniqueWithoutProdutoInput } from "../inputs/EstoqueUpsertWithWhereUniqueWithoutProdutoInput";
import { EstoqueWhereUniqueInput } from "../inputs/EstoqueWhereUniqueInput";

@TypeGraphQL.InputType("EstoqueUpdateManyWithoutProdutoInput", {
  isAbstract: true
})
export class EstoqueUpdateManyWithoutProdutoInput {
  @TypeGraphQL.Field(_type => [EstoqueCreateWithoutProdutoInput], {
    nullable: true
  })
  create?: EstoqueCreateWithoutProdutoInput[] | undefined;

  @TypeGraphQL.Field(_type => [EstoqueCreateOrConnectWithoutProdutoInput], {
    nullable: true
  })
  connectOrCreate?: EstoqueCreateOrConnectWithoutProdutoInput[] | undefined;

  @TypeGraphQL.Field(_type => [EstoqueUpsertWithWhereUniqueWithoutProdutoInput], {
    nullable: true
  })
  upsert?: EstoqueUpsertWithWhereUniqueWithoutProdutoInput[] | undefined;

  @TypeGraphQL.Field(_type => EstoqueCreateManyProdutoInputEnvelope, {
    nullable: true
  })
  createMany?: EstoqueCreateManyProdutoInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [EstoqueWhereUniqueInput], {
    nullable: true
  })
  connect?: EstoqueWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [EstoqueWhereUniqueInput], {
    nullable: true
  })
  set?: EstoqueWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [EstoqueWhereUniqueInput], {
    nullable: true
  })
  disconnect?: EstoqueWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [EstoqueWhereUniqueInput], {
    nullable: true
  })
  delete?: EstoqueWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [EstoqueUpdateWithWhereUniqueWithoutProdutoInput], {
    nullable: true
  })
  update?: EstoqueUpdateWithWhereUniqueWithoutProdutoInput[] | undefined;

  @TypeGraphQL.Field(_type => [EstoqueUpdateManyWithWhereWithoutProdutoInput], {
    nullable: true
  })
  updateMany?: EstoqueUpdateManyWithWhereWithoutProdutoInput[] | undefined;

  @TypeGraphQL.Field(_type => [EstoqueScalarWhereInput], {
    nullable: true
  })
  deleteMany?: EstoqueScalarWhereInput[] | undefined;
}
