import * as TypeGraphQL from "type-graphql";

export enum UnidadeMedida {
  L = "L",
  GR = "GR",
  Unidade = "Unidade"
}
TypeGraphQL.registerEnumType(UnidadeMedida, {
  name: "UnidadeMedida",
  description: undefined,
});
