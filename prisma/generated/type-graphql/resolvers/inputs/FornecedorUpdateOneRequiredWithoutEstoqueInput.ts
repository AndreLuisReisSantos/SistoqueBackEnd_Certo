import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FornecedorCreateOrConnectWithoutEstoqueInput } from "../inputs/FornecedorCreateOrConnectWithoutEstoqueInput";
import { FornecedorCreateWithoutEstoqueInput } from "../inputs/FornecedorCreateWithoutEstoqueInput";
import { FornecedorUpdateWithoutEstoqueInput } from "../inputs/FornecedorUpdateWithoutEstoqueInput";
import { FornecedorUpsertWithoutEstoqueInput } from "../inputs/FornecedorUpsertWithoutEstoqueInput";
import { FornecedorWhereUniqueInput } from "../inputs/FornecedorWhereUniqueInput";

@TypeGraphQL.InputType("FornecedorUpdateOneRequiredWithoutEstoqueInput", {
  isAbstract: true
})
export class FornecedorUpdateOneRequiredWithoutEstoqueInput {
  @TypeGraphQL.Field(_type => FornecedorCreateWithoutEstoqueInput, {
    nullable: true
  })
  create?: FornecedorCreateWithoutEstoqueInput | undefined;

  @TypeGraphQL.Field(_type => FornecedorCreateOrConnectWithoutEstoqueInput, {
    nullable: true
  })
  connectOrCreate?: FornecedorCreateOrConnectWithoutEstoqueInput | undefined;

  @TypeGraphQL.Field(_type => FornecedorUpsertWithoutEstoqueInput, {
    nullable: true
  })
  upsert?: FornecedorUpsertWithoutEstoqueInput | undefined;

  @TypeGraphQL.Field(_type => FornecedorWhereUniqueInput, {
    nullable: true
  })
  connect?: FornecedorWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => FornecedorUpdateWithoutEstoqueInput, {
    nullable: true
  })
  update?: FornecedorUpdateWithoutEstoqueInput | undefined;
}
