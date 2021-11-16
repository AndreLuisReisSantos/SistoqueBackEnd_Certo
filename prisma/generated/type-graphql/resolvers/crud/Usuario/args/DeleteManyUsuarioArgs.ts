import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UsuarioWhereInput } from "../../../inputs/UsuarioWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyUsuarioArgs {
  @TypeGraphQL.Field(_type => UsuarioWhereInput, {
    nullable: true
  })
  where?: UsuarioWhereInput | undefined;
}
