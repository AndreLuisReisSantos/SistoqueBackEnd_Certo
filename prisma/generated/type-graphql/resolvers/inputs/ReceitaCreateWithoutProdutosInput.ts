import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("ReceitaCreateWithoutProdutosInput", {
  isAbstract: true
})
export class ReceitaCreateWithoutProdutosInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  nome!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  tipo!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  descricao!: string;
}
