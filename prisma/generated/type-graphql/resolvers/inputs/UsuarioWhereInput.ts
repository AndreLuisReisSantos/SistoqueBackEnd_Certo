import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { PedidoListRelationFilter } from "../inputs/PedidoListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { TipoUsuarioRelationFilter } from "../inputs/TipoUsuarioRelationFilter";

@TypeGraphQL.InputType("UsuarioWhereInput", {
  isAbstract: true
})
export class UsuarioWhereInput {
  @TypeGraphQL.Field(_type => [UsuarioWhereInput], {
    nullable: true
  })
  AND?: UsuarioWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UsuarioWhereInput], {
    nullable: true
  })
  OR?: UsuarioWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UsuarioWhereInput], {
    nullable: true
  })
  NOT?: UsuarioWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  cpf?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  senha?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  nome?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  rg?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  celular?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  dataNascimento?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => TipoUsuarioRelationFilter, {
    nullable: true
  })
  tipoUsuario?: TipoUsuarioRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  tipoUsuarioId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => PedidoListRelationFilter, {
    nullable: true
  })
  Pedido?: PedidoListRelationFilter | undefined;
}
