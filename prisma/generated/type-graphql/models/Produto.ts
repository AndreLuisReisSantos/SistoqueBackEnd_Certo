import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { CategoriaProduto } from "../models/CategoriaProduto";
import { Estoque } from "../models/Estoque";
import { Receita } from "../models/Receita";
import { UnidadeMedida } from "../enums/UnidadeMedida";
import { ProdutoCount } from "../resolvers/outputs/ProdutoCount";

@TypeGraphQL.ObjectType("Produto", {
  isAbstract: true
})
export class Produto {
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
  descricao?: string | null;

  @TypeGraphQL.Field(_type => UnidadeMedida, {
    nullable: false
  })
  unidadeMedida!: "L" | "GR" | "Unidade";

  categoria?: CategoriaProduto;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  categoriaProdutoId!: number;

  Estoque?: Estoque[];

  Receita?: Receita | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  receitaId?: number | null;

  @TypeGraphQL.Field(_type => ProdutoCount, {
    nullable: true
  })
  _count?: ProdutoCount | null;
}
