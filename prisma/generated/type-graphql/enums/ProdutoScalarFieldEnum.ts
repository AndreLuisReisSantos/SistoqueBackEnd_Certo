import * as TypeGraphQL from "type-graphql";

export enum ProdutoScalarFieldEnum {
  id = "id",
  nome = "nome",
  descricao = "descricao",
  unidadeMedida = "unidadeMedida",
  categoriaProdutoId = "categoriaProdutoId",
  receitaId = "receitaId"
}
TypeGraphQL.registerEnumType(ProdutoScalarFieldEnum, {
  name: "ProdutoScalarFieldEnum",
  description: undefined,
});
