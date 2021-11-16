import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("UsuarioScalarWhereInput", {
  isAbstract: true
})
export class UsuarioScalarWhereInput {
  @TypeGraphQL.Field(_type => [UsuarioScalarWhereInput], {
    nullable: true
  })
  AND?: UsuarioScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UsuarioScalarWhereInput], {
    nullable: true
  })
  OR?: UsuarioScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UsuarioScalarWhereInput], {
    nullable: true
  })
  NOT?: UsuarioScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  cpf?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  senha?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  nome?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  rg?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  celular?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  dataNascimento?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  tipoUsuarioId?: IntFilter | undefined;
}
