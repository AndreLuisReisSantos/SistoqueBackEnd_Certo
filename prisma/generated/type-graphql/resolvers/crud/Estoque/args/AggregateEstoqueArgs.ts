import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EstoqueOrderByWithRelationInput } from "../../../inputs/EstoqueOrderByWithRelationInput";
import { EstoqueWhereInput } from "../../../inputs/EstoqueWhereInput";
import { EstoqueWhereUniqueInput } from "../../../inputs/EstoqueWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateEstoqueArgs {
  @TypeGraphQL.Field(_type => EstoqueWhereInput, {
    nullable: true
  })
  where?: EstoqueWhereInput | undefined;

  @TypeGraphQL.Field(_type => [EstoqueOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: EstoqueOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => EstoqueWhereUniqueInput, {
    nullable: true
  })
  cursor?: EstoqueWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
