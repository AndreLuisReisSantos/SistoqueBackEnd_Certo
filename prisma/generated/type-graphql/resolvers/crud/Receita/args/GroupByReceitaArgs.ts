import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ReceitaOrderByWithAggregationInput } from "../../../inputs/ReceitaOrderByWithAggregationInput";
import { ReceitaScalarWhereWithAggregatesInput } from "../../../inputs/ReceitaScalarWhereWithAggregatesInput";
import { ReceitaWhereInput } from "../../../inputs/ReceitaWhereInput";
import { ReceitaScalarFieldEnum } from "../../../../enums/ReceitaScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByReceitaArgs {
  @TypeGraphQL.Field(_type => ReceitaWhereInput, {
    nullable: true
  })
  where?: ReceitaWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ReceitaOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: ReceitaOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReceitaScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "nome" | "tipo" | "descricao">;

  @TypeGraphQL.Field(_type => ReceitaScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ReceitaScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
