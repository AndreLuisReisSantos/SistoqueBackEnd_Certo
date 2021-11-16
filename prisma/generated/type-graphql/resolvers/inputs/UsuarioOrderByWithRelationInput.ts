import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PedidoOrderByRelationAggregateInput } from "../inputs/PedidoOrderByRelationAggregateInput";
import { TipoUsuarioOrderByWithRelationInput } from "../inputs/TipoUsuarioOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("UsuarioOrderByWithRelationInput", {
  isAbstract: true
})
export class UsuarioOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  cpf?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  senha?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  nome?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  rg?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  celular?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  dataNascimento?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => TipoUsuarioOrderByWithRelationInput, {
    nullable: true
  })
  tipoUsuario?: TipoUsuarioOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  tipoUsuarioId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => PedidoOrderByRelationAggregateInput, {
    nullable: true
  })
  Pedido?: PedidoOrderByRelationAggregateInput | undefined;
}
