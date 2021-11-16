import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TipoUsuarioOrderByWithAggregationInput } from "../../../inputs/TipoUsuarioOrderByWithAggregationInput";
import { TipoUsuarioScalarWhereWithAggregatesInput } from "../../../inputs/TipoUsuarioScalarWhereWithAggregatesInput";
import { TipoUsuarioWhereInput } from "../../../inputs/TipoUsuarioWhereInput";
import { TipoUsuarioScalarFieldEnum } from "../../../../enums/TipoUsuarioScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByTipoUsuarioArgs {
  @TypeGraphQL.Field(_type => TipoUsuarioWhereInput, {
    nullable: true
  })
  where?: TipoUsuarioWhereInput | undefined;

  @TypeGraphQL.Field(_type => [TipoUsuarioOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: TipoUsuarioOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [TipoUsuarioScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "nome">;

  @TypeGraphQL.Field(_type => TipoUsuarioScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: TipoUsuarioScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
