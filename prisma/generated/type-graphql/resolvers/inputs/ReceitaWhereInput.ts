import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { ProdutoListRelationFilter } from "../inputs/ProdutoListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("ReceitaWhereInput", {
  isAbstract: true
})
export class ReceitaWhereInput {
  @TypeGraphQL.Field(_type => [ReceitaWhereInput], {
    nullable: true
  })
  AND?: ReceitaWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReceitaWhereInput], {
    nullable: true
  })
  OR?: ReceitaWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReceitaWhereInput], {
    nullable: true
  })
  NOT?: ReceitaWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  nome?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  tipo?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  descricao?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => ProdutoListRelationFilter, {
    nullable: true
  })
  produtos?: ProdutoListRelationFilter | undefined;
}
