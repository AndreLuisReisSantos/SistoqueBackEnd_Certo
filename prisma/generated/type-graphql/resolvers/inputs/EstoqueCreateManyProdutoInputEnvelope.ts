import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EstoqueCreateManyProdutoInput } from "../inputs/EstoqueCreateManyProdutoInput";

@TypeGraphQL.InputType("EstoqueCreateManyProdutoInputEnvelope", {
  isAbstract: true
})
export class EstoqueCreateManyProdutoInputEnvelope {
  @TypeGraphQL.Field(_type => [EstoqueCreateManyProdutoInput], {
    nullable: false
  })
  data!: EstoqueCreateManyProdutoInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
