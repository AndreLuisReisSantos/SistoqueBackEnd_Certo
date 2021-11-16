import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UsuarioScalarWhereInput } from "../inputs/UsuarioScalarWhereInput";
import { UsuarioUpdateManyMutationInput } from "../inputs/UsuarioUpdateManyMutationInput";

@TypeGraphQL.InputType("UsuarioUpdateManyWithWhereWithoutTipoUsuarioInput", {
  isAbstract: true
})
export class UsuarioUpdateManyWithWhereWithoutTipoUsuarioInput {
  @TypeGraphQL.Field(_type => UsuarioScalarWhereInput, {
    nullable: false
  })
  where!: UsuarioScalarWhereInput;

  @TypeGraphQL.Field(_type => UsuarioUpdateManyMutationInput, {
    nullable: false
  })
  data!: UsuarioUpdateManyMutationInput;
}
