import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FornecedorCreateWithoutEstoqueInput } from "../inputs/FornecedorCreateWithoutEstoqueInput";
import { FornecedorUpdateWithoutEstoqueInput } from "../inputs/FornecedorUpdateWithoutEstoqueInput";

@TypeGraphQL.InputType("FornecedorUpsertWithoutEstoqueInput", {
  isAbstract: true
})
export class FornecedorUpsertWithoutEstoqueInput {
  @TypeGraphQL.Field(_type => FornecedorUpdateWithoutEstoqueInput, {
    nullable: false
  })
  update!: FornecedorUpdateWithoutEstoqueInput;

  @TypeGraphQL.Field(_type => FornecedorCreateWithoutEstoqueInput, {
    nullable: false
  })
  create!: FornecedorCreateWithoutEstoqueInput;
}
