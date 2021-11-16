import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProdutoCreateManyReceitaInputEnvelope } from "../inputs/ProdutoCreateManyReceitaInputEnvelope";
import { ProdutoCreateOrConnectWithoutReceitaInput } from "../inputs/ProdutoCreateOrConnectWithoutReceitaInput";
import { ProdutoCreateWithoutReceitaInput } from "../inputs/ProdutoCreateWithoutReceitaInput";
import { ProdutoScalarWhereInput } from "../inputs/ProdutoScalarWhereInput";
import { ProdutoUpdateManyWithWhereWithoutReceitaInput } from "../inputs/ProdutoUpdateManyWithWhereWithoutReceitaInput";
import { ProdutoUpdateWithWhereUniqueWithoutReceitaInput } from "../inputs/ProdutoUpdateWithWhereUniqueWithoutReceitaInput";
import { ProdutoUpsertWithWhereUniqueWithoutReceitaInput } from "../inputs/ProdutoUpsertWithWhereUniqueWithoutReceitaInput";
import { ProdutoWhereUniqueInput } from "../inputs/ProdutoWhereUniqueInput";

@TypeGraphQL.InputType("ProdutoUpdateManyWithoutReceitaInput", {
  isAbstract: true
})
export class ProdutoUpdateManyWithoutReceitaInput {
  @TypeGraphQL.Field(_type => [ProdutoCreateWithoutReceitaInput], {
    nullable: true
  })
  create?: ProdutoCreateWithoutReceitaInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProdutoCreateOrConnectWithoutReceitaInput], {
    nullable: true
  })
  connectOrCreate?: ProdutoCreateOrConnectWithoutReceitaInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProdutoUpsertWithWhereUniqueWithoutReceitaInput], {
    nullable: true
  })
  upsert?: ProdutoUpsertWithWhereUniqueWithoutReceitaInput[] | undefined;

  @TypeGraphQL.Field(_type => ProdutoCreateManyReceitaInputEnvelope, {
    nullable: true
  })
  createMany?: ProdutoCreateManyReceitaInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [ProdutoUpdateWithWhereUniqueWithoutReceitaInput], {
    nullable: true
  })
  update?: ProdutoUpdateWithWhereUniqueWithoutReceitaInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProdutoUpdateManyWithWhereWithoutReceitaInput], {
    nullable: true
  })
  updateMany?: ProdutoUpdateManyWithWhereWithoutReceitaInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProdutoScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ProdutoScalarWhereInput[] | undefined;
}
