import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProdutoOrderByRelationAggregateInput } from "../inputs/ProdutoOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("CategoriaProdutoOrderByWithRelationInput", {
  isAbstract: true
})
export class CategoriaProdutoOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  nome?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ProdutoOrderByRelationAggregateInput, {
    nullable: true
  })
  Produto?: ProdutoOrderByRelationAggregateInput | undefined;
}
