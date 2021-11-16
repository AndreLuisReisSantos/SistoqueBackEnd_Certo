import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EstoqueCreateWithoutFornecedorInput } from "../inputs/EstoqueCreateWithoutFornecedorInput";
import { EstoqueWhereUniqueInput } from "../inputs/EstoqueWhereUniqueInput";

@TypeGraphQL.InputType("EstoqueCreateOrConnectWithoutFornecedorInput", {
  isAbstract: true
})
export class EstoqueCreateOrConnectWithoutFornecedorInput {
  @TypeGraphQL.Field(_type => EstoqueWhereUniqueInput, {
    nullable: false
  })
  where!: EstoqueWhereUniqueInput;

  @TypeGraphQL.Field(_type => EstoqueCreateWithoutFornecedorInput, {
    nullable: false
  })
  create!: EstoqueCreateWithoutFornecedorInput;
}
