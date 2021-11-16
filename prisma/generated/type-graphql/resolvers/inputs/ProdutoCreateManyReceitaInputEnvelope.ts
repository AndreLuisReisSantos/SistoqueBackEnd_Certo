import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProdutoCreateManyReceitaInput } from "../inputs/ProdutoCreateManyReceitaInput";

@TypeGraphQL.InputType("ProdutoCreateManyReceitaInputEnvelope", {
  isAbstract: true
})
export class ProdutoCreateManyReceitaInputEnvelope {
  @TypeGraphQL.Field(_type => [ProdutoCreateManyReceitaInput], {
    nullable: false
  })
  data!: ProdutoCreateManyReceitaInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
