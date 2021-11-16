import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProdutoWhereInput } from "../inputs/ProdutoWhereInput";

@TypeGraphQL.InputType("ProdutoListRelationFilter", {
  isAbstract: true
})
export class ProdutoListRelationFilter {
  @TypeGraphQL.Field(_type => ProdutoWhereInput, {
    nullable: true
  })
  every?: ProdutoWhereInput | undefined;

  @TypeGraphQL.Field(_type => ProdutoWhereInput, {
    nullable: true
  })
  some?: ProdutoWhereInput | undefined;

  @TypeGraphQL.Field(_type => ProdutoWhereInput, {
    nullable: true
  })
  none?: ProdutoWhereInput | undefined;
}
