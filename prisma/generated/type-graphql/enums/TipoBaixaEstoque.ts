import * as TypeGraphQL from "type-graphql";

export enum TipoBaixaEstoque {
  PERDA = "PERDA",
  ROUBO = "ROUBO",
  RETIRADA = "RETIRADA"
}
TypeGraphQL.registerEnumType(TipoBaixaEstoque, {
  name: "TipoBaixaEstoque",
  description: undefined,
});
