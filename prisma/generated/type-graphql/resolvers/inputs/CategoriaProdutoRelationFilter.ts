import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoriaProdutoWhereInput } from "../inputs/CategoriaProdutoWhereInput";

@TypeGraphQL.InputType("CategoriaProdutoRelationFilter", {
  isAbstract: true
})
export class CategoriaProdutoRelationFilter {
  @TypeGraphQL.Field(_type => CategoriaProdutoWhereInput, {
    nullable: true
  })
  is?: CategoriaProdutoWhereInput | undefined;

  @TypeGraphQL.Field(_type => CategoriaProdutoWhereInput, {
    nullable: true
  })
  isNot?: CategoriaProdutoWhereInput | undefined;
}
