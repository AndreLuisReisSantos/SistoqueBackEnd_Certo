import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BaixaEstoqueCreateManyEstoqueInputEnvelope } from "../inputs/BaixaEstoqueCreateManyEstoqueInputEnvelope";
import { BaixaEstoqueCreateOrConnectWithoutEstoqueInput } from "../inputs/BaixaEstoqueCreateOrConnectWithoutEstoqueInput";
import { BaixaEstoqueCreateWithoutEstoqueInput } from "../inputs/BaixaEstoqueCreateWithoutEstoqueInput";
import { BaixaEstoqueWhereUniqueInput } from "../inputs/BaixaEstoqueWhereUniqueInput";

@TypeGraphQL.InputType("BaixaEstoqueCreateNestedManyWithoutEstoqueInput", {
  isAbstract: true
})
export class BaixaEstoqueCreateNestedManyWithoutEstoqueInput {
  @TypeGraphQL.Field(_type => [BaixaEstoqueCreateWithoutEstoqueInput], {
    nullable: true
  })
  create?: BaixaEstoqueCreateWithoutEstoqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [BaixaEstoqueCreateOrConnectWithoutEstoqueInput], {
    nullable: true
  })
  connectOrCreate?: BaixaEstoqueCreateOrConnectWithoutEstoqueInput[] | undefined;

  @TypeGraphQL.Field(_type => BaixaEstoqueCreateManyEstoqueInputEnvelope, {
    nullable: true
  })
  createMany?: BaixaEstoqueCreateManyEstoqueInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [BaixaEstoqueWhereUniqueInput], {
    nullable: true
  })
  connect?: BaixaEstoqueWhereUniqueInput[] | undefined;
}
