import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TipoUsuarioUpdateManyMutationInput } from "../../../inputs/TipoUsuarioUpdateManyMutationInput";
import { TipoUsuarioWhereInput } from "../../../inputs/TipoUsuarioWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyTipoUsuarioArgs {
  @TypeGraphQL.Field(_type => TipoUsuarioUpdateManyMutationInput, {
    nullable: false
  })
  data!: TipoUsuarioUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => TipoUsuarioWhereInput, {
    nullable: true
  })
  where?: TipoUsuarioWhereInput | undefined;
}
