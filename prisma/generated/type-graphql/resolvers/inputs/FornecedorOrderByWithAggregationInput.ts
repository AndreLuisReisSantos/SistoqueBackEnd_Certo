import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FornecedorAvgOrderByAggregateInput } from "../inputs/FornecedorAvgOrderByAggregateInput";
import { FornecedorCountOrderByAggregateInput } from "../inputs/FornecedorCountOrderByAggregateInput";
import { FornecedorMaxOrderByAggregateInput } from "../inputs/FornecedorMaxOrderByAggregateInput";
import { FornecedorMinOrderByAggregateInput } from "../inputs/FornecedorMinOrderByAggregateInput";
import { FornecedorSumOrderByAggregateInput } from "../inputs/FornecedorSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("FornecedorOrderByWithAggregationInput", {
  isAbstract: true
})
export class FornecedorOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  razaoSocial?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  cnpj?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  email?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  telefone?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  nomeFantasia?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  site?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  celular?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  cep?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  logradouro?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  numero?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  complemento?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  bairro?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  cidade?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  estado?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  representanteId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => FornecedorCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: FornecedorCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => FornecedorAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: FornecedorAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => FornecedorMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: FornecedorMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => FornecedorMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: FornecedorMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => FornecedorSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: FornecedorSumOrderByAggregateInput | undefined;
}
