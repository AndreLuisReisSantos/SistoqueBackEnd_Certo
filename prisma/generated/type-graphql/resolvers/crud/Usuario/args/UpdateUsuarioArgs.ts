import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UsuarioUpdateInput } from "../../../inputs/UsuarioUpdateInput";
import { UsuarioWhereUniqueInput } from "../../../inputs/UsuarioWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateUsuarioArgs {
  @TypeGraphQL.Field(_type => UsuarioUpdateInput, {
    nullable: false
  })
  data!: UsuarioUpdateInput;

  @TypeGraphQL.Field(_type => UsuarioWhereUniqueInput, {
    nullable: false
  })
  where!: UsuarioWhereUniqueInput;
}
