import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BaixaEstoqueOrderByWithRelationInput } from "../../../inputs/BaixaEstoqueOrderByWithRelationInput";
import { BaixaEstoqueWhereInput } from "../../../inputs/BaixaEstoqueWhereInput";
import { BaixaEstoqueWhereUniqueInput } from "../../../inputs/BaixaEstoqueWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateBaixaEstoqueArgs {
  @TypeGraphQL.Field(_type => BaixaEstoqueWhereInput, {
    nullable: true
  })
  where?: BaixaEstoqueWhereInput | undefined;

  @TypeGraphQL.Field(_type => [BaixaEstoqueOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: BaixaEstoqueOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => BaixaEstoqueWhereUniqueInput, {
    nullable: true
  })
  cursor?: BaixaEstoqueWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
