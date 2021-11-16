import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("UsuarioMaxAggregate", {
  isAbstract: true
})
export class UsuarioMaxAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  cpf!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  senha!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  nome!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  rg!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  celular!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  dataNascimento!: Date | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  tipoUsuarioId!: number | null;
}
