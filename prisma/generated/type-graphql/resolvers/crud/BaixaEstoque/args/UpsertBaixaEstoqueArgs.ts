import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BaixaEstoqueCreateInput } from "../../../inputs/BaixaEstoqueCreateInput";
import { BaixaEstoqueUpdateInput } from "../../../inputs/BaixaEstoqueUpdateInput";
import { BaixaEstoqueWhereUniqueInput } from "../../../inputs/BaixaEstoqueWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertBaixaEstoqueArgs {
  @TypeGraphQL.Field(_type => BaixaEstoqueWhereUniqueInput, {
    nullable: false
  })
  where!: BaixaEstoqueWhereUniqueInput;

  @TypeGraphQL.Field(_type => BaixaEstoqueCreateInput, {
    nullable: false
  })
  create!: BaixaEstoqueCreateInput;

  @TypeGraphQL.Field(_type => BaixaEstoqueUpdateInput, {
    nullable: false
  })
  update!: BaixaEstoqueUpdateInput;
}
