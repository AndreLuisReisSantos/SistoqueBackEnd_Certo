import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TipoUsuarioOrderByWithRelationInput } from "../../../inputs/TipoUsuarioOrderByWithRelationInput";
import { TipoUsuarioWhereInput } from "../../../inputs/TipoUsuarioWhereInput";
import { TipoUsuarioWhereUniqueInput } from "../../../inputs/TipoUsuarioWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateTipoUsuarioArgs {
  @TypeGraphQL.Field(_type => TipoUsuarioWhereInput, {
    nullable: true
  })
  where?: TipoUsuarioWhereInput | undefined;

  @TypeGraphQL.Field(_type => [TipoUsuarioOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: TipoUsuarioOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => TipoUsuarioWhereUniqueInput, {
    nullable: true
  })
  cursor?: TipoUsuarioWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
