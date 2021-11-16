import * as TypeGraphQL from "type-graphql";

export enum FornecedorScalarFieldEnum {
  id = "id",
  razaoSocial = "razaoSocial",
  cnpj = "cnpj",
  email = "email",
  telefone = "telefone",
  nomeFantasia = "nomeFantasia",
  site = "site",
  celular = "celular",
  cep = "cep",
  logradouro = "logradouro",
  numero = "numero",
  complemento = "complemento",
  bairro = "bairro",
  cidade = "cidade",
  estado = "estado",
  representanteId = "representanteId"
}
TypeGraphQL.registerEnumType(FornecedorScalarFieldEnum, {
  name: "FornecedorScalarFieldEnum",
  description: undefined,
});
