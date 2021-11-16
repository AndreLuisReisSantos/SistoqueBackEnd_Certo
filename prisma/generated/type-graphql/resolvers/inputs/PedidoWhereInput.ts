import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BaixaEstoqueListRelationFilter } from "../inputs/BaixaEstoqueListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UsuarioRelationFilter } from "../inputs/UsuarioRelationFilter";

@TypeGraphQL.InputType("PedidoWhereInput", {
  isAbstract: true
})
export class PedidoWhereInput {
  @TypeGraphQL.Field(_type => [PedidoWhereInput], {
    nullable: true
  })
  AND?: PedidoWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PedidoWhereInput], {
    nullable: true
  })
  OR?: PedidoWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PedidoWhereInput], {
    nullable: true
  })
  NOT?: PedidoWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  dataPedido?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => BaixaEstoqueListRelationFilter, {
    nullable: true
  })
  BaixaEstoque?: BaixaEstoqueListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => UsuarioRelationFilter, {
    nullable: true
  })
  Usuario?: UsuarioRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  usuarioCpf?: StringFilter | undefined;
}
