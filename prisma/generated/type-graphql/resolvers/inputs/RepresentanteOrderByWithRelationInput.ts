import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FornecedorOrderByRelationAggregateInput } from "../inputs/FornecedorOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("RepresentanteOrderByWithRelationInput", {
  isAbstract: true
})
export class RepresentanteOrderByWithRelationInput {
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
  celular?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => FornecedorOrderByRelationAggregateInput, {
    nullable: true
  })
  Fornecedor?: FornecedorOrderByRelationAggregateInput | undefined;
}
