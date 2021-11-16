import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FornecedorWhereInput } from "../inputs/FornecedorWhereInput";

@TypeGraphQL.InputType("FornecedorListRelationFilter", {
  isAbstract: true
})
export class FornecedorListRelationFilter {
  @TypeGraphQL.Field(_type => FornecedorWhereInput, {
    nullable: true
  })
  every?: FornecedorWhereInput | undefined;

  @TypeGraphQL.Field(_type => FornecedorWhereInput, {
    nullable: true
  })
  some?: FornecedorWhereInput | undefined;

  @TypeGraphQL.Field(_type => FornecedorWhereInput, {
    nullable: true
  })
  none?: FornecedorWhereInput | undefined;
}
