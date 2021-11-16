import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FornecedorUpdateManyWithoutRepresentanteInput } from "../inputs/FornecedorUpdateManyWithoutRepresentanteInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("RepresentanteUpdateInput", {
  isAbstract: true
})
export class RepresentanteUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  nome?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  celular?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => FornecedorUpdateManyWithoutRepresentanteInput, {
    nullable: true
  })
  Fornecedor?: FornecedorUpdateManyWithoutRepresentanteInput | undefined;
}
