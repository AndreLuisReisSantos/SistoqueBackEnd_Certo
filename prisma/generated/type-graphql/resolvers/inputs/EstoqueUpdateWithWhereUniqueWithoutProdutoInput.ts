import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EstoqueUpdateWithoutProdutoInput } from "../inputs/EstoqueUpdateWithoutProdutoInput";
import { EstoqueWhereUniqueInput } from "../inputs/EstoqueWhereUniqueInput";

@TypeGraphQL.InputType("EstoqueUpdateWithWhereUniqueWithoutProdutoInput", {
  isAbstract: true
})
export class EstoqueUpdateWithWhereUniqueWithoutProdutoInput {
  @TypeGraphQL.Field(_type => EstoqueWhereUniqueInput, {
    nullable: false
  })
  where!: EstoqueWhereUniqueInput;

  @TypeGraphQL.Field(_type => EstoqueUpdateWithoutProdutoInput, {
    nullable: false
  })
  data!: EstoqueUpdateWithoutProdutoInput;
}
