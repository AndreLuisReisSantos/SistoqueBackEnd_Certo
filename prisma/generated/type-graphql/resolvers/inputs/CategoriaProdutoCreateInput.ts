import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProdutoCreateNestedManyWithoutCategoriaInput } from "../inputs/ProdutoCreateNestedManyWithoutCategoriaInput";

@TypeGraphQL.InputType("CategoriaProdutoCreateInput", {
  isAbstract: true
})
export class CategoriaProdutoCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  nome!: string;

  @TypeGraphQL.Field(_type => ProdutoCreateNestedManyWithoutCategoriaInput, {
    nullable: true
  })
  Produto?: ProdutoCreateNestedManyWithoutCategoriaInput | undefined;
}
