import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProdutoOrderByRelationAggregateInput } from "../inputs/ProdutoOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ReceitaOrderByWithRelationInput", {
  isAbstract: true
})
export class ReceitaOrderByWithRelationInput {
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
  tipo?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  descricao?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ProdutoOrderByRelationAggregateInput, {
    nullable: true
  })
  produtos?: ProdutoOrderByRelationAggregateInput | undefined;
}
