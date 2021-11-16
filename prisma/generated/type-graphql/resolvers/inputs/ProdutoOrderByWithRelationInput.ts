import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoriaProdutoOrderByWithRelationInput } from "../inputs/CategoriaProdutoOrderByWithRelationInput";
import { EstoqueOrderByRelationAggregateInput } from "../inputs/EstoqueOrderByRelationAggregateInput";
import { ReceitaOrderByWithRelationInput } from "../inputs/ReceitaOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ProdutoOrderByWithRelationInput", {
  isAbstract: true
})
export class ProdutoOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  nome?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  descricao?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  unidadeMedida?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => CategoriaProdutoOrderByWithRelationInput, {
    nullable: true
  })
  categoria?: CategoriaProdutoOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  categoriaProdutoId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => EstoqueOrderByRelationAggregateInput, {
    nullable: true
  })
  Estoque?: EstoqueOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ReceitaOrderByWithRelationInput, {
    nullable: true
  })
  Receita?: ReceitaOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  receitaId?: "asc" | "desc" | undefined;
}
