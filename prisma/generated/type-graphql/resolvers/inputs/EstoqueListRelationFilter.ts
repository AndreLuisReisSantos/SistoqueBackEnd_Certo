import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EstoqueWhereInput } from "../inputs/EstoqueWhereInput";

@TypeGraphQL.InputType("EstoqueListRelationFilter", {
  isAbstract: true
})
export class EstoqueListRelationFilter {
  @TypeGraphQL.Field(_type => EstoqueWhereInput, {
    nullable: true
  })
  every?: EstoqueWhereInput | undefined;

  @TypeGraphQL.Field(_type => EstoqueWhereInput, {
    nullable: true
  })
  some?: EstoqueWhereInput | undefined;

  @TypeGraphQL.Field(_type => EstoqueWhereInput, {
    nullable: true
  })
  none?: EstoqueWhereInput | undefined;
}
