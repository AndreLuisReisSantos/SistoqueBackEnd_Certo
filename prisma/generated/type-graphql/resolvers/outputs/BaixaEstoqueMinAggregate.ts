import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TipoBaixaEstoque } from "../../enums/TipoBaixaEstoque";

@TypeGraphQL.ObjectType("BaixaEstoqueMinAggregate", {
  isAbstract: true
})
export class BaixaEstoqueMinAggregate {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  quantidadeProduto!: number | null;

  @TypeGraphQL.Field(_type => TipoBaixaEstoque, {
    nullable: true
  })
  tipo!: "PERDA" | "ROUBO" | "RETIRADA" | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  foto!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  motivo!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  estoqueId!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  pedidoId!: number | null;
}
