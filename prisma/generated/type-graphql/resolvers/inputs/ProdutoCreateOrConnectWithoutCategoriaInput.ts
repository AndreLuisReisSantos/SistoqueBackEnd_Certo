import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProdutoCreateWithoutCategoriaInput } from "../inputs/ProdutoCreateWithoutCategoriaInput";
import { ProdutoWhereUniqueInput } from "../inputs/ProdutoWhereUniqueInput";

@TypeGraphQL.InputType("ProdutoCreateOrConnectWithoutCategoriaInput", {
  isAbstract: true
})
export class ProdutoCreateOrConnectWithoutCategoriaInput {
  @TypeGraphQL.Field(_type => ProdutoWhereUniqueInput, {
    nullable: false
  })
  where!: ProdutoWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProdutoCreateWithoutCategoriaInput, {
    nullable: false
  })
  create!: ProdutoCreateWithoutCategoriaInput;
}
