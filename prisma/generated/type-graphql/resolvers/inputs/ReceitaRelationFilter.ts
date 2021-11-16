import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReceitaWhereInput } from "../inputs/ReceitaWhereInput";

@TypeGraphQL.InputType("ReceitaRelationFilter", {
  isAbstract: true
})
export class ReceitaRelationFilter {
  @TypeGraphQL.Field(_type => ReceitaWhereInput, {
    nullable: true
  })
  is?: ReceitaWhereInput | undefined;

  @TypeGraphQL.Field(_type => ReceitaWhereInput, {
    nullable: true
  })
  isNot?: ReceitaWhereInput | undefined;
}
