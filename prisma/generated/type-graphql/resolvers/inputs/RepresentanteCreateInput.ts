import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FornecedorCreateNestedManyWithoutRepresentanteInput } from "../inputs/FornecedorCreateNestedManyWithoutRepresentanteInput";

@TypeGraphQL.InputType("RepresentanteCreateInput", {
  isAbstract: true
})
export class RepresentanteCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  nome!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  celular!: string;

  @TypeGraphQL.Field(_type => FornecedorCreateNestedManyWithoutRepresentanteInput, {
    nullable: true
  })
  Fornecedor?: FornecedorCreateNestedManyWithoutRepresentanteInput | undefined;
}
