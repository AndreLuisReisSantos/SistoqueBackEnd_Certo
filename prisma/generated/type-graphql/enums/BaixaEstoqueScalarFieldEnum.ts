import * as TypeGraphQL from "type-graphql";

export enum BaixaEstoqueScalarFieldEnum {
  id = "id",
  quantidadeProduto = "quantidadeProduto",
  tipo = "tipo",
  foto = "foto",
  motivo = "motivo",
  estoqueId = "estoqueId",
  pedidoId = "pedidoId"
}
TypeGraphQL.registerEnumType(BaixaEstoqueScalarFieldEnum, {
  name: "BaixaEstoqueScalarFieldEnum",
  description: undefined,
});
