import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProdutoCreateWithoutEstoqueInput } from "../inputs/ProdutoCreateWithoutEstoqueInput";
import { ProdutoUpdateWithoutEstoqueInput } from "../inputs/ProdutoUpdateWithoutEstoqueInput";

@TypeGraphQL.InputType("ProdutoUpsertWithoutEstoqueInput", {
  isAbstract: true
})
export class ProdutoUpsertWithoutEstoqueInput {
  @TypeGraphQL.Field(_type => ProdutoUpdateWithoutEstoqueInput, {
    nullable: false
  })
  update!: ProdutoUpdateWithoutEstoqueInput;

  @TypeGraphQL.Field(_type => ProdutoCreateWithoutEstoqueInput, {
    nullable: false
  })
  create!: ProdutoCreateWithoutEstoqueInput;
}
