import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UsuarioCreateNestedManyWithoutTipoUsuarioInput } from "../inputs/UsuarioCreateNestedManyWithoutTipoUsuarioInput";

@TypeGraphQL.InputType("TipoUsuarioCreateInput", {
  isAbstract: true
})
export class TipoUsuarioCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  nome!: string;

  @TypeGraphQL.Field(_type => UsuarioCreateNestedManyWithoutTipoUsuarioInput, {
    nullable: true
  })
  Usuario?: UsuarioCreateNestedManyWithoutTipoUsuarioInput | undefined;
}
