import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProdutoCreateWithoutReceitaInput } from "../inputs/ProdutoCreateWithoutReceitaInput";
import { ProdutoUpdateWithoutReceitaInput } from "../inputs/ProdutoUpdateWithoutReceitaInput";
import { ProdutoWhereUniqueInput } from "../inputs/ProdutoWhereUniqueInput";

@TypeGraphQL.InputType("ProdutoUpsertWithWhereUniqueWithoutReceitaInput", {
  isAbstract: true
})
export class ProdutoUpsertWithWhereUniqueWithoutReceitaInput {
  @TypeGraphQL.Field(_type => ProdutoWhereUniqueInput, {
    nullable: false
  })
  where!: ProdutoWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProdutoUpdateWithoutReceitaInput, {
    nullable: false
  })
  update!: ProdutoUpdateWithoutReceitaInput;

  @TypeGraphQL.Field(_type => ProdutoCreateWithoutReceitaInput, {
    nullable: false
  })
  create!: ProdutoCreateWithoutReceitaInput;
}
