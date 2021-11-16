import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RepresentanteOrderByWithAggregationInput } from "../../../inputs/RepresentanteOrderByWithAggregationInput";
import { RepresentanteScalarWhereWithAggregatesInput } from "../../../inputs/RepresentanteScalarWhereWithAggregatesInput";
import { RepresentanteWhereInput } from "../../../inputs/RepresentanteWhereInput";
import { RepresentanteScalarFieldEnum } from "../../../../enums/RepresentanteScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByRepresentanteArgs {
  @TypeGraphQL.Field(_type => RepresentanteWhereInput, {
    nullable: true
  })
  where?: RepresentanteWhereInput | undefined;

  @TypeGraphQL.Field(_type => [RepresentanteOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: RepresentanteOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [RepresentanteScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "nome" | "celular">;

  @TypeGraphQL.Field(_type => RepresentanteScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: RepresentanteScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
