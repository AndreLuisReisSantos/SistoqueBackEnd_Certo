import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { ProdutoListRelationFilter } from "../inputs/ProdutoListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("CategoriaProdutoWhereInput", {
  isAbstract: true
})
export class CategoriaProdutoWhereInput {
  @TypeGraphQL.Field(_type => [CategoriaProdutoWhereInput], {
    nullable: true
  })
  AND?: CategoriaProdutoWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CategoriaProdutoWhereInput], {
    nullable: true
  })
  OR?: CategoriaProdutoWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CategoriaProdutoWhereInput], {
    nullable: true
  })
  NOT?: CategoriaProdutoWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  nome?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => ProdutoListRelationFilter, {
    nullable: true
  })
  Produto?: ProdutoListRelationFilter | undefined;
}
