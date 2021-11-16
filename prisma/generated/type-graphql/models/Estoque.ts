import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { BaixaEstoque } from "../models/BaixaEstoque";
import { Fornecedor } from "../models/Fornecedor";
import { Produto } from "../models/Produto";
import { EstoqueCount } from "../resolvers/outputs/EstoqueCount";

@TypeGraphQL.ObjectType("Estoque", {
  isAbstract: true
})
export class Estoque {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  produto?: Produto;

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

  fornecedor?: Fornecedor;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  fornecedorId!: number;

  BaixaEstoque?: BaixaEstoque[];

  @TypeGraphQL.Field(_type => EstoqueCount, {
    nullable: true
  })
  _count?: EstoqueCount | null;
}
