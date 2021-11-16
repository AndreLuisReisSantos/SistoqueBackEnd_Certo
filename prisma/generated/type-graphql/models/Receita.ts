import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Produto } from "../models/Produto";
import { ReceitaCount } from "../resolvers/outputs/ReceitaCount";

@TypeGraphQL.ObjectType("Receita", {
  isAbstract: true
})
export class Receita {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  nome!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  tipo!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  descricao!: string;

  produtos?: Produto[];

  @TypeGraphQL.Field(_type => ReceitaCount, {
    nullable: true
  })
  _count?: ReceitaCount | null;
}
