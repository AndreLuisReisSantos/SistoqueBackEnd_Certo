import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UsuarioOrderByRelationAggregateInput } from "../inputs/UsuarioOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("TipoUsuarioOrderByWithRelationInput", {
  isAbstract: true
})
export class TipoUsuarioOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  nome?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => UsuarioOrderByRelationAggregateInput, {
    nullable: true
  })
  Usuario?: UsuarioOrderByRelationAggregateInput | undefined;
}
