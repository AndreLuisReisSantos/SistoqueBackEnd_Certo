import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UsuarioAvgAggregate } from "../outputs/UsuarioAvgAggregate";
import { UsuarioCountAggregate } from "../outputs/UsuarioCountAggregate";
import { UsuarioMaxAggregate } from "../outputs/UsuarioMaxAggregate";
import { UsuarioMinAggregate } from "../outputs/UsuarioMinAggregate";
import { UsuarioSumAggregate } from "../outputs/UsuarioSumAggregate";

@TypeGraphQL.ObjectType("UsuarioGroupBy", {
  isAbstract: true
})
export class UsuarioGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  cpf!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  senha!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  nome!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  rg!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  celular!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  dataNascimento!: Date;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  tipoUsuarioId!: number;

  @TypeGraphQL.Field(_type => UsuarioCountAggregate, {
    nullable: true
  })
  _count!: UsuarioCountAggregate | null;

  @TypeGraphQL.Field(_type => UsuarioAvgAggregate, {
    nullable: true
  })
  _avg!: UsuarioAvgAggregate | null;

  @TypeGraphQL.Field(_type => UsuarioSumAggregate, {
    nullable: true
  })
  _sum!: UsuarioSumAggregate | null;

  @TypeGraphQL.Field(_type => UsuarioMinAggregate, {
    nullable: true
  })
  _min!: UsuarioMinAggregate | null;

  @TypeGraphQL.Field(_type => UsuarioMaxAggregate, {
    nullable: true
  })
  _max!: UsuarioMaxAggregate | null;
}
