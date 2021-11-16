import * as TypeGraphQL from "type-graphql";

export enum UsuarioScalarFieldEnum {
  cpf = "cpf",
  senha = "senha",
  nome = "nome",
  rg = "rg",
  celular = "celular",
  dataNascimento = "dataNascimento",
  tipoUsuarioId = "tipoUsuarioId"
}
TypeGraphQL.registerEnumType(UsuarioScalarFieldEnum, {
  name: "UsuarioScalarFieldEnum",
  description: undefined,
});
