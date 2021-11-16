import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UsuarioCreateManyTipoUsuarioInput } from "../inputs/UsuarioCreateManyTipoUsuarioInput";

@TypeGraphQL.InputType("UsuarioCreateManyTipoUsuarioInputEnvelope", {
  isAbstract: true
})
export class UsuarioCreateManyTipoUsuarioInputEnvelope {
  @TypeGraphQL.Field(_type => [UsuarioCreateManyTipoUsuarioInput], {
    nullable: false
  })
  data!: UsuarioCreateManyTipoUsuarioInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
