import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ReceitaOrderByWithRelationInput } from "../../../inputs/ReceitaOrderByWithRelationInput";
import { ReceitaWhereInput } from "../../../inputs/ReceitaWhereInput";
import { ReceitaWhereUniqueInput } from "../../../inputs/ReceitaWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateReceitaArgs {
  @TypeGraphQL.Field(_type => ReceitaWhereInput, {
    nullable: true
  })
  where?: ReceitaWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ReceitaOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: ReceitaOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => ReceitaWhereUniqueInput, {
    nullable: true
  })
  cursor?: ReceitaWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
