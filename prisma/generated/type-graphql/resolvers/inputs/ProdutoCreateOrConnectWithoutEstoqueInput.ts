import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProdutoCreateWithoutEstoqueInput } from "../inputs/ProdutoCreateWithoutEstoqueInput";
import { ProdutoWhereUniqueInput } from "../inputs/ProdutoWhereUniqueInput";

@TypeGraphQL.InputType("ProdutoCreateOrConnectWithoutEstoqueInput", {
  isAbstract: true
})
export class ProdutoCreateOrConnectWithoutEstoqueInput {
  @TypeGraphQL.Field(_type => ProdutoWhereUniqueInput, {
    nullable: false
  })
  where!: ProdutoWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProdutoCreateWithoutEstoqueInput, {
    nullable: false
  })
  create!: ProdutoCreateWithoutEstoqueInput;
}
