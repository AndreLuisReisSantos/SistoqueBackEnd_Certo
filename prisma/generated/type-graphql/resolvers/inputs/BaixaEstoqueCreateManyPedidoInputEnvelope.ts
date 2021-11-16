import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BaixaEstoqueCreateManyPedidoInput } from "../inputs/BaixaEstoqueCreateManyPedidoInput";

@TypeGraphQL.InputType("BaixaEstoqueCreateManyPedidoInputEnvelope", {
  isAbstract: true
})
export class BaixaEstoqueCreateManyPedidoInputEnvelope {
  @TypeGraphQL.Field(_type => [BaixaEstoqueCreateManyPedidoInput], {
    nullable: false
  })
  data!: BaixaEstoqueCreateManyPedidoInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
