import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EstoqueCreateWithoutFornecedorInput } from "../inputs/EstoqueCreateWithoutFornecedorInput";
import { EstoqueUpdateWithoutFornecedorInput } from "../inputs/EstoqueUpdateWithoutFornecedorInput";
import { EstoqueWhereUniqueInput } from "../inputs/EstoqueWhereUniqueInput";

@TypeGraphQL.InputType("EstoqueUpsertWithWhereUniqueWithoutFornecedorInput", {
  isAbstract: true
})
export class EstoqueUpsertWithWhereUniqueWithoutFornecedorInput {
  @TypeGraphQL.Field(_type => EstoqueWhereUniqueInput, {
    nullable: false
  })
  where!: EstoqueWhereUniqueInput;

  @TypeGraphQL.Field(_type => EstoqueUpdateWithoutFornecedorInput, {
    nullable: false
  })
  update!: EstoqueUpdateWithoutFornecedorInput;

  @TypeGraphQL.Field(_type => EstoqueCreateWithoutFornecedorInput, {
    nullable: false
  })
  create!: EstoqueCreateWithoutFornecedorInput;
}
