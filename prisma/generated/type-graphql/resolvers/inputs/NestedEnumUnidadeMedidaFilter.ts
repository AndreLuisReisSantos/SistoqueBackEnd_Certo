import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UnidadeMedida } from "../../enums/UnidadeMedida";

@TypeGraphQL.InputType("NestedEnumUnidadeMedidaFilter", {
  isAbstract: true
})
export class NestedEnumUnidadeMedidaFilter {
  @TypeGraphQL.Field(_type => UnidadeMedida, {
    nullable: true
  })
  equals?: "L" | "GR" | "Unidade" | undefined;

  @TypeGraphQL.Field(_type => [UnidadeMedida], {
    nullable: true
  })
  in?: Array<"L" | "GR" | "Unidade"> | undefined;

  @TypeGraphQL.Field(_type => [UnidadeMedida], {
    nullable: true
  })
  notIn?: Array<"L" | "GR" | "Unidade"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumUnidadeMedidaFilter, {
    nullable: true
  })
  not?: NestedEnumUnidadeMedidaFilter | undefined;
}
