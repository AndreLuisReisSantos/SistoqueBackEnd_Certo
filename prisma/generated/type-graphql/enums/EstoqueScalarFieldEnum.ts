import * as TypeGraphQL from "type-graphql";

export enum EstoqueScalarFieldEnum {
  id = "id",
  quantidadeProduto = "quantidadeProduto",
  produtoId = "produtoId",
  dataRecebimento = "dataRecebimento",
  dataVencimento = "dataVencimento",
  marca = "marca",
  preco = "preco",
  fornecedorId = "fornecedorId"
}
TypeGraphQL.registerEnumType(EstoqueScalarFieldEnum, {
  name: "EstoqueScalarFieldEnum",
  description: undefined,
});
