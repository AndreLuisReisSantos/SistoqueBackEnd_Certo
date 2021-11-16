import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReceitaCreateWithoutProdutosInput } from "../inputs/ReceitaCreateWithoutProdutosInput";
import { ReceitaWhereUniqueInput } from "../inputs/ReceitaWhereUniqueInput";

@TypeGraphQL.InputType("ReceitaCreateOrConnectWithoutProdutosInput", {
  isAbstract: true
})
export class ReceitaCreateOrConnectWithoutProdutosInput {
  @TypeGraphQL.Field(_type => ReceitaWhereUniqueInput, {
    nullable: false
  })
  where!: ReceitaWhereUniqueInput;

  @TypeGraphQL.Field(_type => ReceitaCreateWithoutProdutosInput, {
    nullable: false
  })
  create!: ReceitaCreateWithoutProdutosInput;
}
