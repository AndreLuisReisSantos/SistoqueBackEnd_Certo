import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FornecedorCreateWithoutEstoqueInput } from "../inputs/FornecedorCreateWithoutEstoqueInput";
import { FornecedorWhereUniqueInput } from "../inputs/FornecedorWhereUniqueInput";

@TypeGraphQL.InputType("FornecedorCreateOrConnectWithoutEstoqueInput", {
  isAbstract: true
})
export class FornecedorCreateOrConnectWithoutEstoqueInput {
  @TypeGraphQL.Field(_type => FornecedorWhereUniqueInput, {
    nullable: false
  })
  where!: FornecedorWhereUniqueInput;

  @TypeGraphQL.Field(_type => FornecedorCreateWithoutEstoqueInput, {
    nullable: false
  })
  create!: FornecedorCreateWithoutEstoqueInput;
}
