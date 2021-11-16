import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoriaProdutoAvgAggregate } from "../outputs/CategoriaProdutoAvgAggregate";
import { CategoriaProdutoCountAggregate } from "../outputs/CategoriaProdutoCountAggregate";
import { CategoriaProdutoMaxAggregate } from "../outputs/CategoriaProdutoMaxAggregate";
import { CategoriaProdutoMinAggregate } from "../outputs/CategoriaProdutoMinAggregate";
import { CategoriaProdutoSumAggregate } from "../outputs/CategoriaProdutoSumAggregate";

@TypeGraphQL.ObjectType("CategoriaProdutoGroupBy", {
  isAbstract: true
})
export class CategoriaProdutoGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  nome!: string;

  @TypeGraphQL.Field(_type => CategoriaProdutoCountAggregate, {
    nullable: true
  })
  _count!: CategoriaProdutoCountAggregate | null;

  @TypeGraphQL.Field(_type => CategoriaProdutoAvgAggregate, {
    nullable: true
  })
  _avg!: CategoriaProdutoAvgAggregate | null;

  @TypeGraphQL.Field(_type => CategoriaProdutoSumAggregate, {
    nullable: true
  })
  _sum!: CategoriaProdutoSumAggregate | null;

  @TypeGraphQL.Field(_type => CategoriaProdutoMinAggregate, {
    nullable: true
  })
  _min!: CategoriaProdutoMinAggregate | null;

  @TypeGraphQL.Field(_type => CategoriaProdutoMaxAggregate, {
    nullable: true
  })
  _max!: CategoriaProdutoMaxAggregate | null;
}
