import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EstoqueCreateWithoutProdutoInput } from "../inputs/EstoqueCreateWithoutProdutoInput";
import { EstoqueWhereUniqueInput } from "../inputs/EstoqueWhereUniqueInput";

@TypeGraphQL.InputType("EstoqueCreateOrConnectWithoutProdutoInput", {
  isAbstract: true
})
export class EstoqueCreateOrConnectWithoutProdutoInput {
  @TypeGraphQL.Field(_type => EstoqueWhereUniqueInput, {
    nullable: false
  })
  where!: EstoqueWhereUniqueInput;

  @TypeGraphQL.Field(_type => EstoqueCreateWithoutProdutoInput, {
    nullable: false
  })
  create!: EstoqueCreateWithoutProdutoInput;
}
