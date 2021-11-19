import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("ProdutoScalarWhereInput", {
  isAbstract: true
})
export class ProdutoScalarWhereInput {
  @TypeGraphQL.Field(_type => [ProdutoScalarWhereInput], {
    nullable: true
  })
  AND?: ProdutoScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProdutoScalarWhereInput], {
    nullable: true
  })
  OR?: ProdutoScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProdutoScalarWhereInput], {
    nullable: true
  })
  NOT?: ProdutoScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  nome?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  descricao?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  unidadeMedida?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  categoriaProdutoId?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  receitaId?: IntNullableFilter | undefined;
}
