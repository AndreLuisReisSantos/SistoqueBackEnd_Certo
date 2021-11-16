import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("EstoqueCreateManyProdutoInput", {
  isAbstract: true
})
export class EstoqueCreateManyProdutoInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  quantidadeProduto!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  dataRecebimento?: Date | undefined;

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
}
