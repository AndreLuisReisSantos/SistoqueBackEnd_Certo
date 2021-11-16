import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProdutoAvgAggregate } from "../outputs/ProdutoAvgAggregate";
import { ProdutoCountAggregate } from "../outputs/ProdutoCountAggregate";
import { ProdutoMaxAggregate } from "../outputs/ProdutoMaxAggregate";
import { ProdutoMinAggregate } from "../outputs/ProdutoMinAggregate";
import { ProdutoSumAggregate } from "../outputs/ProdutoSumAggregate";
import { UnidadeMedida } from "../../enums/UnidadeMedida";

@TypeGraphQL.ObjectType("ProdutoGroupBy", {
  isAbstract: true
})
export class ProdutoGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  nome!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  descricao!: string | null;

  @TypeGraphQL.Field(_type => UnidadeMedida, {
    nullable: false
  })
  unidadeMedida!: "L" | "GR" | "Unidade";

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  categoriaProdutoId!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  receitaId!: number | null;

  @TypeGraphQL.Field(_type => ProdutoCountAggregate, {
    nullable: true
  })
  _count!: ProdutoCountAggregate | null;

  @TypeGraphQL.Field(_type => ProdutoAvgAggregate, {
    nullable: true
  })
  _avg!: ProdutoAvgAggregate | null;

  @TypeGraphQL.Field(_type => ProdutoSumAggregate, {
    nullable: true
  })
  _sum!: ProdutoSumAggregate | null;

  @TypeGraphQL.Field(_type => ProdutoMinAggregate, {
    nullable: true
  })
  _min!: ProdutoMinAggregate | null;

  @TypeGraphQL.Field(_type => ProdutoMaxAggregate, {
    nullable: true
  })
  _max!: ProdutoMaxAggregate | null;
}
