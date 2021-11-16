import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FornecedorListRelationFilter } from "../inputs/FornecedorListRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("RepresentanteWhereInput", {
  isAbstract: true
})
export class RepresentanteWhereInput {
  @TypeGraphQL.Field(_type => [RepresentanteWhereInput], {
    nullable: true
  })
  AND?: RepresentanteWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [RepresentanteWhereInput], {
    nullable: true
  })
  OR?: RepresentanteWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [RepresentanteWhereInput], {
    nullable: true
  })
  NOT?: RepresentanteWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  nome?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  celular?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => FornecedorListRelationFilter, {
    nullable: true
  })
  Fornecedor?: FornecedorListRelationFilter | undefined;
}
