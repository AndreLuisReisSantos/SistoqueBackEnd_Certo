import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EstoqueOrderByWithRelationInput } from "../inputs/EstoqueOrderByWithRelationInput";
import { PedidoOrderByWithRelationInput } from "../inputs/PedidoOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("BaixaEstoqueOrderByWithRelationInput", {
  isAbstract: true
})
export class BaixaEstoqueOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  quantidadeProduto?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  tipo?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  foto?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  motivo?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => EstoqueOrderByWithRelationInput, {
    nullable: true
  })
  Estoque?: EstoqueOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  estoqueId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => PedidoOrderByWithRelationInput, {
    nullable: true
  })
  Pedido?: PedidoOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  pedidoId?: "asc" | "desc" | undefined;
}
