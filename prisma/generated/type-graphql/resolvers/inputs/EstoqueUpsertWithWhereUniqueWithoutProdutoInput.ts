import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EstoqueCreateWithoutProdutoInput } from "../inputs/EstoqueCreateWithoutProdutoInput";
import { EstoqueUpdateWithoutProdutoInput } from "../inputs/EstoqueUpdateWithoutProdutoInput";
import { EstoqueWhereUniqueInput } from "../inputs/EstoqueWhereUniqueInput";

@TypeGraphQL.InputType("EstoqueUpsertWithWhereUniqueWithoutProdutoInput", {
  isAbstract: true
})
export class EstoqueUpsertWithWhereUniqueWithoutProdutoInput {
  @TypeGraphQL.Field(_type => EstoqueWhereUniqueInput, {
    nullable: false
  })
  where!: EstoqueWhereUniqueInput;

  @TypeGraphQL.Field(_type => EstoqueUpdateWithoutProdutoInput, {
    nullable: false
  })
  update!: EstoqueUpdateWithoutProdutoInput;

  @TypeGraphQL.Field(_type => EstoqueCreateWithoutProdutoInput, {
    nullable: false
  })
  create!: EstoqueCreateWithoutProdutoInput;
}
