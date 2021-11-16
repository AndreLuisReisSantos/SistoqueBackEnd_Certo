import * as TypeGraphQL from "type-graphql";

export enum PedidoScalarFieldEnum {
  id = "id",
  dataPedido = "dataPedido",
  usuarioCpf = "usuarioCpf"
}
TypeGraphQL.registerEnumType(PedidoScalarFieldEnum, {
  name: "PedidoScalarFieldEnum",
  description: undefined,
});
