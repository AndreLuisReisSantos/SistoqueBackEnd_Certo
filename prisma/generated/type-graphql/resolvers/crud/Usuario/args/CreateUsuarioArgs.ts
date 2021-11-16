import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UsuarioCreateInput } from "../../../inputs/UsuarioCreateInput";

@TypeGraphQL.ArgsType()
export class CreateUsuarioArgs {
  @TypeGraphQL.Field(_type => UsuarioCreateInput, {
    nullable: false
  })
  data!: UsuarioCreateInput;
}
