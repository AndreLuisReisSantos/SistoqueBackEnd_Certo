import * as TypeGraphQL from "type-graphql";

export enum RepresentanteScalarFieldEnum {
  id = "id",
  nome = "nome",
  celular = "celular"
}
TypeGraphQL.registerEnumType(RepresentanteScalarFieldEnum, {
  name: "RepresentanteScalarFieldEnum",
  description: undefined,
});
