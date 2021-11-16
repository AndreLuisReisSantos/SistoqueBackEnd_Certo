import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProdutoCreateManyCategoriaInputEnvelope } from "../inputs/ProdutoCreateManyCategoriaInputEnvelope";
import { ProdutoCreateOrConnectWithoutCategoriaInput } from "../inputs/ProdutoCreateOrConnectWithoutCategoriaInput";
import { ProdutoCreateWithoutCategoriaInput } from "../inputs/ProdutoCreateWithoutCategoriaInput";
import { ProdutoScalarWhereInput } from "../inputs/ProdutoScalarWhereInput";
import { ProdutoUpdateManyWithWhereWithoutCategoriaInput } from "../inputs/ProdutoUpdateManyWithWhereWithoutCategoriaInput";
import { ProdutoUpdateWithWhereUniqueWithoutCategoriaInput } from "../inputs/ProdutoUpdateWithWhereUniqueWithoutCategoriaInput";
import { ProdutoUpsertWithWhereUniqueWithoutCategoriaInput } from "../inputs/ProdutoUpsertWithWhereUniqueWithoutCategoriaInput";
import { ProdutoWhereUniqueInput } from "../inputs/ProdutoWhereUniqueInput";

@TypeGraphQL.InputType("ProdutoUpdateManyWithoutCategoriaInput", {
  isAbstract: true
})
export class ProdutoUpdateManyWithoutCategoriaInput {
  @TypeGraphQL.Field(_type => [ProdutoCreateWithoutCategoriaInput], {
    nullable: true
  })
  create?: ProdutoCreateWithoutCategoriaInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProdutoCreateOrConnectWithoutCategoriaInput], {
    nullable: true
  })
  connectOrCreate?: ProdutoCreateOrConnectWithoutCategoriaInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProdutoUpsertWithWhereUniqueWithoutCategoriaInput], {
    nullable: true
  })
  upsert?: ProdutoUpsertWithWhereUniqueWithoutCategoriaInput[] | undefined;

  @TypeGraphQL.Field(_type => ProdutoCreateManyCategoriaInputEnvelope, {
    nullable: true
  })
  createMany?: ProdutoCreateManyCategoriaInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ProdutoWhereUniqueInput], {
    nullable: true
  })
  connect?: ProdutoWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProdutoWhereUniqueInput], {
    nullable: true
  })
  set?: ProdutoWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProdutoWhereUniqueInput], {
    nullable: true
  })
  disconnect?: ProdutoWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProdutoWhereUniqueInput], {
    nullable: true
  })
  delete?: ProdutoWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProdutoUpdateWithWhereUniqueWithoutCategoriaInput], {
    nullable: true
  })
  update?: ProdutoUpdateWithWhereUniqueWithoutCategoriaInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProdutoUpdateManyWithWhereWithoutCategoriaInput], {
    nullable: true
  })
  updateMany?: ProdutoUpdateManyWithWhereWithoutCategoriaInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProdutoScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ProdutoScalarWhereInput[] | undefined;
}
