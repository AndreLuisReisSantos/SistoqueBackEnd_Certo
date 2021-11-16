import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EstoqueCreateManyFornecedorInputEnvelope } from "../inputs/EstoqueCreateManyFornecedorInputEnvelope";
import { EstoqueCreateOrConnectWithoutFornecedorInput } from "../inputs/EstoqueCreateOrConnectWithoutFornecedorInput";
import { EstoqueCreateWithoutFornecedorInput } from "../inputs/EstoqueCreateWithoutFornecedorInput";
import { EstoqueScalarWhereInput } from "../inputs/EstoqueScalarWhereInput";
import { EstoqueUpdateManyWithWhereWithoutFornecedorInput } from "../inputs/EstoqueUpdateManyWithWhereWithoutFornecedorInput";
import { EstoqueUpdateWithWhereUniqueWithoutFornecedorInput } from "../inputs/EstoqueUpdateWithWhereUniqueWithoutFornecedorInput";
import { EstoqueUpsertWithWhereUniqueWithoutFornecedorInput } from "../inputs/EstoqueUpsertWithWhereUniqueWithoutFornecedorInput";
import { EstoqueWhereUniqueInput } from "../inputs/EstoqueWhereUniqueInput";

@TypeGraphQL.InputType("EstoqueUpdateManyWithoutFornecedorInput", {
  isAbstract: true
})
export class EstoqueUpdateManyWithoutFornecedorInput {
  @TypeGraphQL.Field(_type => [EstoqueCreateWithoutFornecedorInput], {
    nullable: true
  })
  create?: EstoqueCreateWithoutFornecedorInput[] | undefined;

  @TypeGraphQL.Field(_type => [EstoqueCreateOrConnectWithoutFornecedorInput], {
    nullable: true
  })
  connectOrCreate?: EstoqueCreateOrConnectWithoutFornecedorInput[] | undefined;

  @TypeGraphQL.Field(_type => [EstoqueUpsertWithWhereUniqueWithoutFornecedorInput], {
    nullable: true
  })
  upsert?: EstoqueUpsertWithWhereUniqueWithoutFornecedorInput[] | undefined;

  @TypeGraphQL.Field(_type => EstoqueCreateManyFornecedorInputEnvelope, {
    nullable: true
  })
  createMany?: EstoqueCreateManyFornecedorInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [EstoqueUpdateWithWhereUniqueWithoutFornecedorInput], {
    nullable: true
  })
  update?: EstoqueUpdateWithWhereUniqueWithoutFornecedorInput[] | undefined;

  @TypeGraphQL.Field(_type => [EstoqueUpdateManyWithWhereWithoutFornecedorInput], {
    nullable: true
  })
  updateMany?: EstoqueUpdateManyWithWhereWithoutFornecedorInput[] | undefined;

  @TypeGraphQL.Field(_type => [EstoqueScalarWhereInput], {
    nullable: true
  })
  deleteMany?: EstoqueScalarWhereInput[] | undefined;
}
