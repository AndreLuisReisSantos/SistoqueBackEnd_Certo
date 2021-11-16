import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UnidadeMedida } from "../../enums/UnidadeMedida";

@TypeGraphQL.InputType("EnumUnidadeMedidaFieldUpdateOperationsInput", {
  isAbstract: true
})
export class EnumUnidadeMedidaFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => UnidadeMedida, {
    nullable: true
  })
  set?: "L" | "GR" | "Unidade" | undefined;
}
