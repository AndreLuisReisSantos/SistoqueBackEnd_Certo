import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProdutoUpdateWithoutReceitaInput } from "../inputs/ProdutoUpdateWithoutReceitaInput";
import { ProdutoWhereUniqueInput } from "../inputs/ProdutoWhereUniqueInput";

@TypeGraphQL.InputType("ProdutoUpdateWithWhereUniqueWithoutReceitaInput", {
  isAbstract: true
})
export class ProdutoUpdateWithWhereUniqueWithoutReceitaInput {
  @TypeGraphQL.Field(_type => ProdutoWhereUniqueInput, {
    nullable: false
  })
  where!: ProdutoWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProdutoUpdateWithoutReceitaInput, {
    nullable: false
  })
  data!: ProdutoUpdateWithoutReceitaInput;
}
