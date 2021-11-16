import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EstoqueScalarWhereInput } from "../inputs/EstoqueScalarWhereInput";
import { EstoqueUpdateManyMutationInput } from "../inputs/EstoqueUpdateManyMutationInput";

@TypeGraphQL.InputType("EstoqueUpdateManyWithWhereWithoutProdutoInput", {
  isAbstract: true
})
export class EstoqueUpdateManyWithWhereWithoutProdutoInput {
  @TypeGraphQL.Field(_type => EstoqueScalarWhereInput, {
    nullable: false
  })
  where!: EstoqueScalarWhereInput;

  @TypeGraphQL.Field(_type => EstoqueUpdateManyMutationInput, {
    nullable: false
  })
  data!: EstoqueUpdateManyMutationInput;
}
