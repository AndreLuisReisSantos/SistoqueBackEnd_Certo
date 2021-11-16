import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BaixaEstoqueCreateNestedManyWithoutEstoqueInput } from "../inputs/BaixaEstoqueCreateNestedManyWithoutEstoqueInput";
import { FornecedorCreateNestedOneWithoutEstoqueInput } from "../inputs/FornecedorCreateNestedOneWithoutEstoqueInput";
import { ProdutoCreateNestedOneWithoutEstoqueInput } from "../inputs/ProdutoCreateNestedOneWithoutEstoqueInput";

@TypeGraphQL.InputType("EstoqueCreateInput", {
  isAbstract: true
})
export class EstoqueCreateInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  quantidadeProduto!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  dataRecebimento?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  dataVencimento!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  marca!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: false
  })
  preco!: number;

  @TypeGraphQL.Field(_type => ProdutoCreateNestedOneWithoutEstoqueInput, {
    nullable: false
  })
  produto!: ProdutoCreateNestedOneWithoutEstoqueInput;

  @TypeGraphQL.Field(_type => FornecedorCreateNestedOneWithoutEstoqueInput, {
    nullable: false
  })
  fornecedor!: FornecedorCreateNestedOneWithoutEstoqueInput;

  @TypeGraphQL.Field(_type => BaixaEstoqueCreateNestedManyWithoutEstoqueInput, {
    nullable: true
  })
  BaixaEstoque?: BaixaEstoqueCreateNestedManyWithoutEstoqueInput | undefined;
}
