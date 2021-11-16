import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TipoUsuarioWhereUniqueInput } from "../../../inputs/TipoUsuarioWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueTipoUsuarioArgs {
  @TypeGraphQL.Field(_type => TipoUsuarioWhereUniqueInput, {
    nullable: false
  })
  where!: TipoUsuarioWhereUniqueInput;
}
