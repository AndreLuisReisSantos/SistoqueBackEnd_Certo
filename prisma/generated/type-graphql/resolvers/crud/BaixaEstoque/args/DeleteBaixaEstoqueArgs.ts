import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BaixaEstoqueWhereUniqueInput } from "../../../inputs/BaixaEstoqueWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteBaixaEstoqueArgs {
  @TypeGraphQL.Field(_type => BaixaEstoqueWhereUniqueInput, {
    nullable: false
  })
  where!: BaixaEstoqueWhereUniqueInput;
}
