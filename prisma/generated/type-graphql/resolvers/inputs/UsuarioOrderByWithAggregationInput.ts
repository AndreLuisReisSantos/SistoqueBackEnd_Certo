import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UsuarioAvgOrderByAggregateInput } from "../inputs/UsuarioAvgOrderByAggregateInput";
import { UsuarioCountOrderByAggregateInput } from "../inputs/UsuarioCountOrderByAggregateInput";
import { UsuarioMaxOrderByAggregateInput } from "../inputs/UsuarioMaxOrderByAggregateInput";
import { UsuarioMinOrderByAggregateInput } from "../inputs/UsuarioMinOrderByAggregateInput";
import { UsuarioSumOrderByAggregateInput } from "../inputs/UsuarioSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("UsuarioOrderByWithAggregationInput", {
  isAbstract: true
})
export class UsuarioOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  cpf?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  senha?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  nome?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  rg?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  celular?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  dataNascimento?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  tipoUsuarioId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => UsuarioCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: UsuarioCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => UsuarioAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: UsuarioAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => UsuarioMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: UsuarioMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => UsuarioMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: UsuarioMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => UsuarioSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: UsuarioSumOrderByAggregateInput | undefined;
}
