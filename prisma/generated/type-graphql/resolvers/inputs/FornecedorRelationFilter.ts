import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FornecedorWhereInput } from "../inputs/FornecedorWhereInput";

@TypeGraphQL.InputType("FornecedorRelationFilter", {
  isAbstract: true
})
export class FornecedorRelationFilter {
  @TypeGraphQL.Field(_type => FornecedorWhereInput, {
    nullable: true
  })
  is?: FornecedorWhereInput | undefined;

  @TypeGraphQL.Field(_type => FornecedorWhereInput, {
    nullable: true
  })
  isNot?: FornecedorWhereInput | undefined;
}
