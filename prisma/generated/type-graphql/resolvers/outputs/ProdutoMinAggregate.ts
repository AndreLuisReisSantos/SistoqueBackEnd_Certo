import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UnidadeMedida } from "../../enums/UnidadeMedida";

@TypeGraphQL.ObjectType("ProdutoMinAggregate", {
  isAbstract: true
})
export class ProdutoMinAggregate {
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

  @TypeGraphQL.Field(_type => UnidadeMedida, {
    nullable: true
  })
  unidadeMedida!: "L" | "GR" | "Unidade" | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  categoriaProdutoId!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  receitaId!: number | null;
}
