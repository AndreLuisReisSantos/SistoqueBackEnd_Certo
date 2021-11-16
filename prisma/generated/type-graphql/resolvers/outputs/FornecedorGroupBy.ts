import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FornecedorAvgAggregate } from "../outputs/FornecedorAvgAggregate";
import { FornecedorCountAggregate } from "../outputs/FornecedorCountAggregate";
import { FornecedorMaxAggregate } from "../outputs/FornecedorMaxAggregate";
import { FornecedorMinAggregate } from "../outputs/FornecedorMinAggregate";
import { FornecedorSumAggregate } from "../outputs/FornecedorSumAggregate";

@TypeGraphQL.ObjectType("FornecedorGroupBy", {
  isAbstract: true
})
export class FornecedorGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  razaoSocial!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  cnpj!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  email!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  telefone!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  nomeFantasia!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  site!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  celular!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  cep!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  logradouro!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  numero!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  complemento!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  bairro!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  cidade!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  estado!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  representanteId!: number | null;

  @TypeGraphQL.Field(_type => FornecedorCountAggregate, {
    nullable: true
  })
  _count!: FornecedorCountAggregate | null;

  @TypeGraphQL.Field(_type => FornecedorAvgAggregate, {
    nullable: true
  })
  _avg!: FornecedorAvgAggregate | null;

  @TypeGraphQL.Field(_type => FornecedorSumAggregate, {
    nullable: true
  })
  _sum!: FornecedorSumAggregate | null;

  @TypeGraphQL.Field(_type => FornecedorMinAggregate, {
    nullable: true
  })
  _min!: FornecedorMinAggregate | null;

  @TypeGraphQL.Field(_type => FornecedorMaxAggregate, {
    nullable: true
  })
  _max!: FornecedorMaxAggregate | null;
}
