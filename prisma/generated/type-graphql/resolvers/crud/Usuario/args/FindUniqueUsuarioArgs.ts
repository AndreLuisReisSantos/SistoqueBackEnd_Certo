import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UsuarioWhereUniqueInput } from "../../../inputs/UsuarioWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueUsuarioArgs {
  @TypeGraphQL.Field(_type => UsuarioWhereUniqueInput, {
    nullable: false
  })
  where!: UsuarioWhereUniqueInput;
}
