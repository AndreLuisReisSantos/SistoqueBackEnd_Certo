import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BaixaEstoqueListRelationFilter } from "../inputs/BaixaEstoqueListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { FloatFilter } from "../inputs/FloatFilter";
import { FornecedorRelationFilter } from "../inputs/FornecedorRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { ProdutoRelationFilter } from "../inputs/ProdutoRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("EstoqueWhereInput", {
  isAbstract: true
})
export class EstoqueWhereInput {
  @TypeGraphQL.Field(_type => [EstoqueWhereInput], {
    nullable: true
  })
  AND?: EstoqueWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [EstoqueWhereInput], {
    nullable: true
  })
  OR?: EstoqueWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [EstoqueWhereInput], {
    nullable: true
  })
  NOT?: EstoqueWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => ProdutoRelationFilter, {
    nullable: true
  })
  produto?: ProdutoRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  quantidadeProduto?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  produtoId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  dataRecebimento?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  dataVencimento?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  marca?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => FloatFilter, {
    nullable: true
  })
  preco?: FloatFilter | undefined;

  @TypeGraphQL.Field(_type => FornecedorRelationFilter, {
    nullable: true
  })
  fornecedor?: FornecedorRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  fornecedorId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => BaixaEstoqueListRelationFilter, {
    nullable: true
  })
  BaixaEstoque?: BaixaEstoqueListRelationFilter | undefined;
}
