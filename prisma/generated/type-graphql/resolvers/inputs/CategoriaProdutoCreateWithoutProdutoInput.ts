import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("CategoriaProdutoCreateWithoutProdutoInput", {
  isAbstract: true
})
export class CategoriaProdutoCreateWithoutProdutoInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  nome!: string;
}
