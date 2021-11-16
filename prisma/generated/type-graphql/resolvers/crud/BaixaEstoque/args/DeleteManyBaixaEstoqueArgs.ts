import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BaixaEstoqueWhereInput } from "../../../inputs/BaixaEstoqueWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyBaixaEstoqueArgs {
  @TypeGraphQL.Field(_type => BaixaEstoqueWhereInput, {
    nullable: true
  })
  where?: BaixaEstoqueWhereInput | undefined;
}
