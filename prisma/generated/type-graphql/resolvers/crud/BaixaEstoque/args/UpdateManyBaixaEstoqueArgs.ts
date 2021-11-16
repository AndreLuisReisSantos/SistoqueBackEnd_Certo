import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BaixaEstoqueUpdateManyMutationInput } from "../../../inputs/BaixaEstoqueUpdateManyMutationInput";
import { BaixaEstoqueWhereInput } from "../../../inputs/BaixaEstoqueWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyBaixaEstoqueArgs {
  @TypeGraphQL.Field(_type => BaixaEstoqueUpdateManyMutationInput, {
    nullable: false
  })
  data!: BaixaEstoqueUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => BaixaEstoqueWhereInput, {
    nullable: true
  })
  where?: BaixaEstoqueWhereInput | undefined;
}
