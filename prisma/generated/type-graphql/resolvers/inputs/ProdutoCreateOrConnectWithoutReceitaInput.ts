import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProdutoCreateWithoutReceitaInput } from "../inputs/ProdutoCreateWithoutReceitaInput";
import { ProdutoWhereUniqueInput } from "../inputs/ProdutoWhereUniqueInput";

@TypeGraphQL.InputType("ProdutoCreateOrConnectWithoutReceitaInput", {
  isAbstract: true
})
export class ProdutoCreateOrConnectWithoutReceitaInput {
  @TypeGraphQL.Field(_type => ProdutoWhereUniqueInput, {
    nullable: false
  })
  where!: ProdutoWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProdutoCreateWithoutReceitaInput, {
    nullable: false
  })
  create!: ProdutoCreateWithoutReceitaInput;
}
