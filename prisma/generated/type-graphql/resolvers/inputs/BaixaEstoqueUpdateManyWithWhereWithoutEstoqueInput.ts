import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BaixaEstoqueScalarWhereInput } from "../inputs/BaixaEstoqueScalarWhereInput";
import { BaixaEstoqueUpdateManyMutationInput } from "../inputs/BaixaEstoqueUpdateManyMutationInput";

@TypeGraphQL.InputType("BaixaEstoqueUpdateManyWithWhereWithoutEstoqueInput", {
  isAbstract: true
})
export class BaixaEstoqueUpdateManyWithWhereWithoutEstoqueInput {
  @TypeGraphQL.Field(_type => BaixaEstoqueScalarWhereInput, {
    nullable: false
  })
  where!: BaixaEstoqueScalarWhereInput;

  @TypeGraphQL.Field(_type => BaixaEstoqueUpdateManyMutationInput, {
    nullable: false
  })
  data!: BaixaEstoqueUpdateManyMutationInput;
}
