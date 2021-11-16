import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TipoUsuarioCreateInput } from "../../../inputs/TipoUsuarioCreateInput";
import { TipoUsuarioUpdateInput } from "../../../inputs/TipoUsuarioUpdateInput";
import { TipoUsuarioWhereUniqueInput } from "../../../inputs/TipoUsuarioWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertTipoUsuarioArgs {
  @TypeGraphQL.Field(_type => TipoUsuarioWhereUniqueInput, {
    nullable: false
  })
  where!: TipoUsuarioWhereUniqueInput;

  @TypeGraphQL.Field(_type => TipoUsuarioCreateInput, {
    nullable: false
  })
  create!: TipoUsuarioCreateInput;

  @TypeGraphQL.Field(_type => TipoUsuarioUpdateInput, {
    nullable: false
  })
  update!: TipoUsuarioUpdateInput;
}
