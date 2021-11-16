import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BaixaEstoqueOrderByRelationAggregateInput } from "../inputs/BaixaEstoqueOrderByRelationAggregateInput";
import { UsuarioOrderByWithRelationInput } from "../inputs/UsuarioOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PedidoOrderByWithRelationInput", {
  isAbstract: true
})
export class PedidoOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  dataPedido?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => BaixaEstoqueOrderByRelationAggregateInput, {
    nullable: true
  })
  BaixaEstoque?: BaixaEstoqueOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => UsuarioOrderByWithRelationInput, {
    nullable: true
  })
  Usuario?: UsuarioOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  usuarioCpf?: "asc" | "desc" | undefined;
}
