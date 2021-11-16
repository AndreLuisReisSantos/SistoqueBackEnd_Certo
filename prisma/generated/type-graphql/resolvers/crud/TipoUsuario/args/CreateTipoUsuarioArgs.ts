import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TipoUsuarioCreateInput } from "../../../inputs/TipoUsuarioCreateInput";

@TypeGraphQL.ArgsType()
export class CreateTipoUsuarioArgs {
  @TypeGraphQL.Field(_type => TipoUsuarioCreateInput, {
    nullable: false
  })
  data!: TipoUsuarioCreateInput;
}
