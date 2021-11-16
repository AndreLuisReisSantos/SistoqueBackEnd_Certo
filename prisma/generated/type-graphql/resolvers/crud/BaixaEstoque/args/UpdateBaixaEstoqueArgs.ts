import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BaixaEstoqueUpdateInput } from "../../../inputs/BaixaEstoqueUpdateInput";
import { BaixaEstoqueWhereUniqueInput } from "../../../inputs/BaixaEstoqueWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateBaixaEstoqueArgs {
  @TypeGraphQL.Field(_type => BaixaEstoqueUpdateInput, {
    nullable: false
  })
  data!: BaixaEstoqueUpdateInput;

  @TypeGraphQL.Field(_type => BaixaEstoqueWhereUniqueInput, {
    nullable: false
  })
  where!: BaixaEstoqueWhereUniqueInput;
}
