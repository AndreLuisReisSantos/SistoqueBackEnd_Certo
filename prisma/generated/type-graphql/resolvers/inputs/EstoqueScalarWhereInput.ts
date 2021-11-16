import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { FloatFilter } from "../inputs/FloatFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("EstoqueScalarWhereInput", {
  isAbstract: true
})
export class EstoqueScalarWhereInput {
  @TypeGraphQL.Field(_type => [EstoqueScalarWhereInput], {
    nullable: true
  })
  AND?: EstoqueScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [EstoqueScalarWhereInput], {
    nullable: true
  })
  OR?: EstoqueScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [EstoqueScalarWhereInput], {
    nullable: true
  })
  NOT?: EstoqueScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

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

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  fornecedorId?: IntFilter | undefined;
}
