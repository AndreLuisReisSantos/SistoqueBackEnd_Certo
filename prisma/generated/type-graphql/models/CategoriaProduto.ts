import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Produto } from "../models/Produto";
import { CategoriaProdutoCount } from "../resolvers/outputs/CategoriaProdutoCount";

@TypeGraphQL.ObjectType("CategoriaProduto", {
  isAbstract: true
})
export class CategoriaProduto {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  nome!: string;

  Produto?: Produto[];

  @TypeGraphQL.Field(_type => CategoriaProdutoCount, {
    nullable: true
  })
  _count?: CategoriaProdutoCount | null;
}
