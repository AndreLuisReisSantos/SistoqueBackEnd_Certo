import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TipoUsuarioCreateNestedOneWithoutUsuarioInput } from "../inputs/TipoUsuarioCreateNestedOneWithoutUsuarioInput";

@TypeGraphQL.InputType("UsuarioCreateWithoutPedidoInput", {
  isAbstract: true
})
export class UsuarioCreateWithoutPedidoInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  cpf!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  senha!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  nome!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  rg!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  celular!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  dataNascimento!: Date;

  @TypeGraphQL.Field(_type => TipoUsuarioCreateNestedOneWithoutUsuarioInput, {
    nullable: false
  })
  tipoUsuario!: TipoUsuarioCreateNestedOneWithoutUsuarioInput;
}
