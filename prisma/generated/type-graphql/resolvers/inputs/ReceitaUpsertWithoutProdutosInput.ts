import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReceitaCreateWithoutProdutosInput } from "../inputs/ReceitaCreateWithoutProdutosInput";
import { ReceitaUpdateWithoutProdutosInput } from "../inputs/ReceitaUpdateWithoutProdutosInput";

@TypeGraphQL.InputType("ReceitaUpsertWithoutProdutosInput", {
  isAbstract: true
})
export class ReceitaUpsertWithoutProdutosInput {
  @TypeGraphQL.Field(_type => ReceitaUpdateWithoutProdutosInput, {
    nullable: false
  })
  update!: ReceitaUpdateWithoutProdutosInput;

  @TypeGraphQL.Field(_type => ReceitaCreateWithoutProdutosInput, {
    nullable: false
  })
  create!: ReceitaCreateWithoutProdutosInput;
}
