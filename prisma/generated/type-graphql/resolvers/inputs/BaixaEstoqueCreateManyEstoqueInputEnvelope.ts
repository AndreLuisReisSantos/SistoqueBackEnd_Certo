import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BaixaEstoqueCreateManyEstoqueInput } from "../inputs/BaixaEstoqueCreateManyEstoqueInput";

@TypeGraphQL.InputType("BaixaEstoqueCreateManyEstoqueInputEnvelope", {
  isAbstract: true
})
export class BaixaEstoqueCreateManyEstoqueInputEnvelope {
  @TypeGraphQL.Field(_type => [BaixaEstoqueCreateManyEstoqueInput], {
    nullable: false
  })
  data!: BaixaEstoqueCreateManyEstoqueInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
