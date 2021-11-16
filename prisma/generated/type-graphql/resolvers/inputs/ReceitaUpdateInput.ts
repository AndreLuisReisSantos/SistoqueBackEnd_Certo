import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProdutoUpdateManyWithoutReceitaInput } from "../inputs/ProdutoUpdateManyWithoutReceitaInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("ReceitaUpdateInput", {
  isAbstract: true
})
export class ReceitaUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  nome?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  tipo?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  descricao?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => ProdutoUpdateManyWithoutReceitaInput, {
    nullable: true
  })
  produtos?: ProdutoUpdateManyWithoutReceitaInput | undefined;
}
