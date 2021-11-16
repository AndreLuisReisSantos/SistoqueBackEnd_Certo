import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BaixaEstoqueCreateInput } from "../../../inputs/BaixaEstoqueCreateInput";

@TypeGraphQL.ArgsType()
export class CreateBaixaEstoqueArgs {
  @TypeGraphQL.Field(_type => BaixaEstoqueCreateInput, {
    nullable: false
  })
  data!: BaixaEstoqueCreateInput;
}
