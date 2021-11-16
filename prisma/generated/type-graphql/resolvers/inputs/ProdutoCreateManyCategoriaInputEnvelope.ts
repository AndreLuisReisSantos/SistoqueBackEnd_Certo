import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProdutoCreateManyCategoriaInput } from "../inputs/ProdutoCreateManyCategoriaInput";

@TypeGraphQL.InputType("ProdutoCreateManyCategoriaInputEnvelope", {
  isAbstract: true
})
export class ProdutoCreateManyCategoriaInputEnvelope {
  @TypeGraphQL.Field(_type => [ProdutoCreateManyCategoriaInput], {
    nullable: false
  })
  data!: ProdutoCreateManyCategoriaInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
