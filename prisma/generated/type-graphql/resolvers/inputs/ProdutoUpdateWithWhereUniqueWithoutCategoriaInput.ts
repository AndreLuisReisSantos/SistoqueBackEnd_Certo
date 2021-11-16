import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProdutoUpdateWithoutCategoriaInput } from "../inputs/ProdutoUpdateWithoutCategoriaInput";
import { ProdutoWhereUniqueInput } from "../inputs/ProdutoWhereUniqueInput";

@TypeGraphQL.InputType("ProdutoUpdateWithWhereUniqueWithoutCategoriaInput", {
  isAbstract: true
})
export class ProdutoUpdateWithWhereUniqueWithoutCategoriaInput {
  @TypeGraphQL.Field(_type => ProdutoWhereUniqueInput, {
    nullable: false
  })
  where!: ProdutoWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProdutoUpdateWithoutCategoriaInput, {
    nullable: false
  })
  data!: ProdutoUpdateWithoutCategoriaInput;
}
