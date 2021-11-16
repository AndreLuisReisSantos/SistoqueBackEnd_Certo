import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumUnidadeMedidaFilter } from "../inputs/NestedEnumUnidadeMedidaFilter";
import { NestedEnumUnidadeMedidaWithAggregatesFilter } from "../inputs/NestedEnumUnidadeMedidaWithAggregatesFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { UnidadeMedida } from "../../enums/UnidadeMedida";

@TypeGraphQL.InputType("EnumUnidadeMedidaWithAggregatesFilter", {
  isAbstract: true
})
export class EnumUnidadeMedidaWithAggregatesFilter {
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

  @TypeGraphQL.Field(_type => NestedEnumUnidadeMedidaWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumUnidadeMedidaWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumUnidadeMedidaFilter, {
    nullable: true
  })
  _min?: NestedEnumUnidadeMedidaFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumUnidadeMedidaFilter, {
    nullable: true
  })
  _max?: NestedEnumUnidadeMedidaFilter | undefined;
}
