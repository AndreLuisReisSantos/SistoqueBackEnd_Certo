import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EnumTipoBaixaEstoqueFilter } from "../inputs/EnumTipoBaixaEstoqueFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("BaixaEstoqueScalarWhereInput", {
  isAbstract: true
})
export class BaixaEstoqueScalarWhereInput {
  @TypeGraphQL.Field(_type => [BaixaEstoqueScalarWhereInput], {
    nullable: true
  })
  AND?: BaixaEstoqueScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [BaixaEstoqueScalarWhereInput], {
    nullable: true
  })
  OR?: BaixaEstoqueScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [BaixaEstoqueScalarWhereInput], {
    nullable: true
  })
  NOT?: BaixaEstoqueScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  quantidadeProduto?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => EnumTipoBaixaEstoqueFilter, {
    nullable: true
  })
  tipo?: EnumTipoBaixaEstoqueFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  foto?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  motivo?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  estoqueId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  pedidoId?: IntNullableFilter | undefined;
}
