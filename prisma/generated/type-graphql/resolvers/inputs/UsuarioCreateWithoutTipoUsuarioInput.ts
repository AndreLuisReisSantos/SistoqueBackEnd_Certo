import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PedidoCreateNestedManyWithoutUsuarioInput } from "../inputs/PedidoCreateNestedManyWithoutUsuarioInput";

@TypeGraphQL.InputType("UsuarioCreateWithoutTipoUsuarioInput", {
  isAbstract: true
})
export class UsuarioCreateWithoutTipoUsuarioInput {
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

  @TypeGraphQL.Field(_type => PedidoCreateNestedManyWithoutUsuarioInput, {
    nullable: true
  })
  Pedido?: PedidoCreateNestedManyWithoutUsuarioInput | undefined;
}
