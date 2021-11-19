import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EstoqueCreateNestedManyWithoutProdutoInput } from "../inputs/EstoqueCreateNestedManyWithoutProdutoInput";
import { ReceitaCreateNestedOneWithoutProdutosInput } from "../inputs/ReceitaCreateNestedOneWithoutProdutosInput";

@TypeGraphQL.InputType("ProdutoCreateWithoutCategoriaInput", {
  isAbstract: true
})
export class ProdutoCreateWithoutCategoriaInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  nome!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  descricao?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  unidadeMedida!: string;

  @TypeGraphQL.Field(_type => EstoqueCreateNestedManyWithoutProdutoInput, {
    nullable: true
  })
  Estoque?: EstoqueCreateNestedManyWithoutProdutoInput | undefined;

  @TypeGraphQL.Field(_type => ReceitaCreateNestedOneWithoutProdutosInput, {
    nullable: true
  })
  Receita?: ReceitaCreateNestedOneWithoutProdutosInput | undefined;
}
