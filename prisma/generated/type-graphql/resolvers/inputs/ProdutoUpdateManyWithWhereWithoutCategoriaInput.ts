import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProdutoScalarWhereInput } from "../inputs/ProdutoScalarWhereInput";
import { ProdutoUpdateManyMutationInput } from "../inputs/ProdutoUpdateManyMutationInput";

@TypeGraphQL.InputType("ProdutoUpdateManyWithWhereWithoutCategoriaInput", {
  isAbstract: true
})
export class ProdutoUpdateManyWithWhereWithoutCategoriaInput {
  @TypeGraphQL.Field(_type => ProdutoScalarWhereInput, {
    nullable: false
  })
  where!: ProdutoScalarWhereInput;

  @TypeGraphQL.Field(_type => ProdutoUpdateManyMutationInput, {
    nullable: false
  })
  data!: ProdutoUpdateManyMutationInput;
}
