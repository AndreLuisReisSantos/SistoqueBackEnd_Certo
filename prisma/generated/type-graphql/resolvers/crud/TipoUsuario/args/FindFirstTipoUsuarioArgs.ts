import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TipoUsuarioOrderByWithRelationInput } from "../../../inputs/TipoUsuarioOrderByWithRelationInput";
import { TipoUsuarioWhereInput } from "../../../inputs/TipoUsuarioWhereInput";
import { TipoUsuarioWhereUniqueInput } from "../../../inputs/TipoUsuarioWhereUniqueInput";
import { TipoUsuarioScalarFieldEnum } from "../../../../enums/TipoUsuarioScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstTipoUsuarioArgs {
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

  @TypeGraphQL.Field(_type => [TipoUsuarioScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "nome"> | undefined;
}
