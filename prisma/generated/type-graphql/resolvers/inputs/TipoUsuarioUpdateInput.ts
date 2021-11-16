import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UsuarioUpdateManyWithoutTipoUsuarioInput } from "../inputs/UsuarioUpdateManyWithoutTipoUsuarioInput";

@TypeGraphQL.InputType("TipoUsuarioUpdateInput", {
  isAbstract: true
})
export class TipoUsuarioUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  nome?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UsuarioUpdateManyWithoutTipoUsuarioInput, {
    nullable: true
  })
  Usuario?: UsuarioUpdateManyWithoutTipoUsuarioInput | undefined;
}
