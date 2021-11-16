import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoriaProdutoCreateNestedOneWithoutProdutoInput } from "../inputs/CategoriaProdutoCreateNestedOneWithoutProdutoInput";
import { ReceitaCreateNestedOneWithoutProdutosInput } from "../inputs/ReceitaCreateNestedOneWithoutProdutosInput";
import { UnidadeMedida } from "../../enums/UnidadeMedida";

@TypeGraphQL.InputType("ProdutoCreateWithoutEstoqueInput", {
  isAbstract: true
})
export class ProdutoCreateWithoutEstoqueInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  nome!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  descricao?: string | undefined;

  @TypeGraphQL.Field(_type => UnidadeMedida, {
    nullable: false
  })
  unidadeMedida!: "L" | "GR" | "Unidade";

  @TypeGraphQL.Field(_type => CategoriaProdutoCreateNestedOneWithoutProdutoInput, {
    nullable: false
  })
  categoria!: CategoriaProdutoCreateNestedOneWithoutProdutoInput;

  @TypeGraphQL.Field(_type => ReceitaCreateNestedOneWithoutProdutosInput, {
    nullable: true
  })
  Receita?: ReceitaCreateNestedOneWithoutProdutosInput | undefined;
}