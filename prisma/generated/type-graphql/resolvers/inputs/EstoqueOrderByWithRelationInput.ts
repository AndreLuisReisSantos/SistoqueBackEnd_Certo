import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BaixaEstoqueOrderByRelationAggregateInput } from "../inputs/BaixaEstoqueOrderByRelationAggregateInput";
import { FornecedorOrderByWithRelationInput } from "../inputs/FornecedorOrderByWithRelationInput";
import { ProdutoOrderByWithRelationInput } from "../inputs/ProdutoOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("EstoqueOrderByWithRelationInput", {
  isAbstract: true
})
export class EstoqueOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ProdutoOrderByWithRelationInput, {
    nullable: true
  })
  produto?: ProdutoOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  quantidadeProduto?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  produtoId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  dataRecebimento?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  dataVencimento?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  marca?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  preco?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => FornecedorOrderByWithRelationInput, {
    nullable: true
  })
  fornecedor?: FornecedorOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  fornecedorId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => BaixaEstoqueOrderByRelationAggregateInput, {
    nullable: true
  })
  BaixaEstoque?: BaixaEstoqueOrderByRelationAggregateInput | undefined;
}
