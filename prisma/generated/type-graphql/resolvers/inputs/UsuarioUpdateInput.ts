import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { PedidoUpdateManyWithoutUsuarioInput } from "../inputs/PedidoUpdateManyWithoutUsuarioInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TipoUsuarioUpdateOneRequiredWithoutUsuarioInput } from "../inputs/TipoUsuarioUpdateOneRequiredWithoutUsuarioInput";

@TypeGraphQL.InputType("UsuarioUpdateInput", {
  isAbstract: true
})
export class UsuarioUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  cpf?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  senha?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  nome?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  rg?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  celular?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  dataNascimento?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => TipoUsuarioUpdateOneRequiredWithoutUsuarioInput, {
    nullable: true
  })
  tipoUsuario?: TipoUsuarioUpdateOneRequiredWithoutUsuarioInput | undefined;

  @TypeGraphQL.Field(_type => PedidoUpdateManyWithoutUsuarioInput, {
    nullable: true
  })
  Pedido?: PedidoUpdateManyWithoutUsuarioInput | undefined;
}
