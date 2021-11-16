import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EstoqueUpdateWithoutFornecedorInput } from "../inputs/EstoqueUpdateWithoutFornecedorInput";
import { EstoqueWhereUniqueInput } from "../inputs/EstoqueWhereUniqueInput";

@TypeGraphQL.InputType("EstoqueUpdateWithWhereUniqueWithoutFornecedorInput", {
  isAbstract: true
})
export class EstoqueUpdateWithWhereUniqueWithoutFornecedorInput {
  @TypeGraphQL.Field(_type => EstoqueWhereUniqueInput, {
    nullable: false
  })
  where!: EstoqueWhereUniqueInput;

  @TypeGraphQL.Field(_type => EstoqueUpdateWithoutFornecedorInput, {
    nullable: false
  })
  data!: EstoqueUpdateWithoutFornecedorInput;
}
