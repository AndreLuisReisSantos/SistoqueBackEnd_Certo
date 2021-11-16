import * as TypeGraphQL from "type-graphql";

export enum ReceitaScalarFieldEnum {
  id = "id",
  nome = "nome",
  tipo = "tipo",
  descricao = "descricao"
}
TypeGraphQL.registerEnumType(ReceitaScalarFieldEnum, {
  name: "ReceitaScalarFieldEnum",
  description: undefined,
});
