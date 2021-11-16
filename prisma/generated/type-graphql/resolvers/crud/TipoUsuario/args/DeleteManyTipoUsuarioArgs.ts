import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TipoUsuarioWhereInput } from "../../../inputs/TipoUsuarioWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyTipoUsuarioArgs {
  @TypeGraphQL.Field(_type => TipoUsuarioWhereInput, {
    nullable: true
  })
  where?: TipoUsuarioWhereInput | undefined;
}
