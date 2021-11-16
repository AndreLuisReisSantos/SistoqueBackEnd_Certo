import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UsuarioCreateInput } from "../../../inputs/UsuarioCreateInput";
import { UsuarioUpdateInput } from "../../../inputs/UsuarioUpdateInput";
import { UsuarioWhereUniqueInput } from "../../../inputs/UsuarioWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertUsuarioArgs {
  @TypeGraphQL.Field(_type => UsuarioWhereUniqueInput, {
    nullable: false
  })
  where!: UsuarioWhereUniqueInput;

  @TypeGraphQL.Field(_type => UsuarioCreateInput, {
    nullable: false
  })
  create!: UsuarioCreateInput;

  @TypeGraphQL.Field(_type => UsuarioUpdateInput, {
    nullable: false
  })
  update!: UsuarioUpdateInput;
}
