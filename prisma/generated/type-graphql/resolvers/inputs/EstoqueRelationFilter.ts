import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EstoqueWhereInput } from "../inputs/EstoqueWhereInput";

@TypeGraphQL.InputType("EstoqueRelationFilter", {
  isAbstract: true
})
export class EstoqueRelationFilter {
  @TypeGraphQL.Field(_type => EstoqueWhereInput, {
    nullable: true
  })
  is?: EstoqueWhereInput | undefined;

  @TypeGraphQL.Field(_type => EstoqueWhereInput, {
    nullable: true
  })
  isNot?: EstoqueWhereInput | undefined;
}
