import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoriaProdutoCreateNestedOneWithoutProdutoInput } from "../inputs/CategoriaProdutoCreateNestedOneWithoutProdutoInput";
import { EstoqueCreateNestedManyWithoutProdutoInput } from "../inputs/EstoqueCreateNestedManyWithoutProdutoInput";
import { ReceitaCreateNestedOneWithoutProdutosInput } from "../inputs/ReceitaCreateNestedOneWithoutProdutosInput";

@TypeGraphQL.InputType("ProdutoCreateInput", {
  isAbstract: true
})
export class ProdutoCreateInput {
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

  @TypeGraphQL.Field(_type => CategoriaProdutoCreateNestedOneWithoutProdutoInput, {
    nullable: true
  })
  categoria?: CategoriaProdutoCreateNestedOneWithoutProdutoInput | undefined;

  @TypeGraphQL.Field(_type => EstoqueCreateNestedManyWithoutProdutoInput, {
    nullable: true
  })
  Estoque?: EstoqueCreateNestedManyWithoutProdutoInput | undefined;

  @TypeGraphQL.Field(_type => ReceitaCreateNestedOneWithoutProdutosInput, {
    nullable: true
  })
  Receita?: ReceitaCreateNestedOneWithoutProdutosInput | undefined;
}
