import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("EstoqueMaxAggregate", {
  isAbstract: true
})
export class EstoqueMaxAggregate {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  quantidadeProduto!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  produtoId!: number | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  dataRecebimento!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  dataVencimento!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  marca!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  preco!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  fornecedorId!: number | null;
}
