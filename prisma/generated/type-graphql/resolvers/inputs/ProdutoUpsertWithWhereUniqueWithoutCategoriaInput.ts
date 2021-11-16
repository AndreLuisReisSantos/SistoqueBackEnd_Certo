import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProdutoCreateWithoutCategoriaInput } from "../inputs/ProdutoCreateWithoutCategoriaInput";
import { ProdutoUpdateWithoutCategoriaInput } from "../inputs/ProdutoUpdateWithoutCategoriaInput";
import { ProdutoWhereUniqueInput } from "../inputs/ProdutoWhereUniqueInput";

@TypeGraphQL.InputType("ProdutoUpsertWithWhereUniqueWithoutCategoriaInput", {
  isAbstract: true
})
export class ProdutoUpsertWithWhereUniqueWithoutCategoriaInput {
  @TypeGraphQL.Field(_type => ProdutoWhereUniqueInput, {
    nullable: false
  })
  where!: ProdutoWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProdutoUpdateWithoutCategoriaInput, {
    nullable: false
  })
  update!: ProdutoUpdateWithoutCategoriaInput;

  @TypeGraphQL.Field(_type => ProdutoCreateWithoutCategoriaInput, {
    nullable: false
  })
  create!: ProdutoCreateWithoutCategoriaInput;
}
