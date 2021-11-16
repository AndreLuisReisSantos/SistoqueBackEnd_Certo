import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoriaProdutoCreateWithoutProdutoInput } from "../inputs/CategoriaProdutoCreateWithoutProdutoInput";
import { CategoriaProdutoUpdateWithoutProdutoInput } from "../inputs/CategoriaProdutoUpdateWithoutProdutoInput";

@TypeGraphQL.InputType("CategoriaProdutoUpsertWithoutProdutoInput", {
  isAbstract: true
})
export class CategoriaProdutoUpsertWithoutProdutoInput {
  @TypeGraphQL.Field(_type => CategoriaProdutoUpdateWithoutProdutoInput, {
    nullable: false
  })
  update!: CategoriaProdutoUpdateWithoutProdutoInput;

  @TypeGraphQL.Field(_type => CategoriaProdutoCreateWithoutProdutoInput, {
    nullable: false
  })
  create!: CategoriaProdutoCreateWithoutProdutoInput;
}
