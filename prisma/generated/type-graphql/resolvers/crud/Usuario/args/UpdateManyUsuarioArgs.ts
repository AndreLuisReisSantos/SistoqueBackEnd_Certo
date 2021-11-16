import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UsuarioUpdateManyMutationInput } from "../../../inputs/UsuarioUpdateManyMutationInput";
import { UsuarioWhereInput } from "../../../inputs/UsuarioWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyUsuarioArgs {
  @TypeGraphQL.Field(_type => UsuarioUpdateManyMutationInput, {
    nullable: false
  })
  data!: UsuarioUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => UsuarioWhereInput, {
    nullable: true
  })
  where?: UsuarioWhereInput | undefined;
}
