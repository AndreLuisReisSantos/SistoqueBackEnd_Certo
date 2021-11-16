import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoriaProdutoCreateWithoutProdutoInput } from "../inputs/CategoriaProdutoCreateWithoutProdutoInput";
import { CategoriaProdutoWhereUniqueInput } from "../inputs/CategoriaProdutoWhereUniqueInput";

@TypeGraphQL.InputType("CategoriaProdutoCreateOrConnectWithoutProdutoInput", {
  isAbstract: true
})
export class CategoriaProdutoCreateOrConnectWithoutProdutoInput {
  @TypeGraphQL.Field(_type => CategoriaProdutoWhereUniqueInput, {
    nullable: false
  })
  where!: CategoriaProdutoWhereUniqueInput;

  @TypeGraphQL.Field(_type => CategoriaProdutoCreateWithoutProdutoInput, {
    nullable: false
  })
  create!: CategoriaProdutoCreateWithoutProdutoInput;
}
