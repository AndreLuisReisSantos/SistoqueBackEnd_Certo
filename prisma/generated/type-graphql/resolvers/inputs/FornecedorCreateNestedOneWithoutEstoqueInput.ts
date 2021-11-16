import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FornecedorCreateOrConnectWithoutEstoqueInput } from "../inputs/FornecedorCreateOrConnectWithoutEstoqueInput";
import { FornecedorCreateWithoutEstoqueInput } from "../inputs/FornecedorCreateWithoutEstoqueInput";
import { FornecedorWhereUniqueInput } from "../inputs/FornecedorWhereUniqueInput";

@TypeGraphQL.InputType("FornecedorCreateNestedOneWithoutEstoqueInput", {
  isAbstract: true
})
export class FornecedorCreateNestedOneWithoutEstoqueInput {
  @TypeGraphQL.Field(_type => FornecedorCreateWithoutEstoqueInput, {
    nullable: true
  })
  create?: FornecedorCreateWithoutEstoqueInput | undefined;

  @TypeGraphQL.Field(_type => FornecedorCreateOrConnectWithoutEstoqueInput, {
    nullable: true
  })
  connectOrCreate?: FornecedorCreateOrConnectWithoutEstoqueInput | undefined;

  @TypeGraphQL.Field(_type => FornecedorWhereUniqueInput, {
    nullable: true
  })
  connect?: FornecedorWhereUniqueInput | undefined;
}
