import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("ProdutoMaxAggregate", {
  isAbstract: true
})
export class ProdutoMaxAggregate {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  nome!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  descricao!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  unidadeMedida!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  categoriaProdutoId!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  receitaId!: number | null;
}
