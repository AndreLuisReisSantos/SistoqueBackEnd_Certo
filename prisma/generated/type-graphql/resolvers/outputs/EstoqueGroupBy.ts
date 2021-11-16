import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EstoqueAvgAggregate } from "../outputs/EstoqueAvgAggregate";
import { EstoqueCountAggregate } from "../outputs/EstoqueCountAggregate";
import { EstoqueMaxAggregate } from "../outputs/EstoqueMaxAggregate";
import { EstoqueMinAggregate } from "../outputs/EstoqueMinAggregate";
import { EstoqueSumAggregate } from "../outputs/EstoqueSumAggregate";

@TypeGraphQL.ObjectType("EstoqueGroupBy", {
  isAbstract: true
})
export class EstoqueGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  quantidadeProduto!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  produtoId!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  dataRecebimento!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  dataVencimento!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  marca!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: false
  })
  preco!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  fornecedorId!: number;

  @TypeGraphQL.Field(_type => EstoqueCountAggregate, {
    nullable: true
  })
  _count!: EstoqueCountAggregate | null;

  @TypeGraphQL.Field(_type => EstoqueAvgAggregate, {
    nullable: true
  })
  _avg!: EstoqueAvgAggregate | null;

  @TypeGraphQL.Field(_type => EstoqueSumAggregate, {
    nullable: true
  })
  _sum!: EstoqueSumAggregate | null;

  @TypeGraphQL.Field(_type => EstoqueMinAggregate, {
    nullable: true
  })
  _min!: EstoqueMinAggregate | null;

  @TypeGraphQL.Field(_type => EstoqueMaxAggregate, {
    nullable: true
  })
  _max!: EstoqueMaxAggregate | null;
}
