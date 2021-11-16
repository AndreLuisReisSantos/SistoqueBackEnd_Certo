import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("UsuarioScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class UsuarioScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [UsuarioScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: UsuarioScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [UsuarioScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: UsuarioScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [UsuarioScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: UsuarioScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  cpf?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  senha?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  nome?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  rg?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  celular?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  dataNascimento?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  tipoUsuarioId?: IntWithAggregatesFilter | undefined;
}
